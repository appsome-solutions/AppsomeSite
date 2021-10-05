import React, { ReactElement, useState } from 'react';
import { Modal, Upload, message } from 'antd';
import styled from 'styled-components';
import { FieldMetaProps, FieldProps } from 'formik';
import { InputProps, TextAreaProps } from 'antd/lib/input';

import { PlusOutlined, FilePdfTwoTone, LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
import { InterfaceInputComponent } from './types';
import { media } from '../../global/RWD';

export type FormikInputProps = InterfaceInputComponent;

interface EditorStylesWrapperType {
  form?: any;
}

type CustomInputComponentProps = FormikInputProps &
  FieldProps &
  InputProps &
  TextAreaProps &
  FieldMetaProps<any> &
  EditorStylesWrapperType;

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

const MAXIMUM_FILE_SIZE = 10; //in MBs

const UploadStyle = styled(Upload)<EditorStylesWrapperType>`
  margin-top: 16px;
  .ant-upload.ant-upload-select-picture-card {
    background-color: ${props => props.theme.colors.main.primary};
    border: 1px solid
      ${props =>
        props.form.errors.urlFile ? props.theme.colors.functional.error : props.theme.colors.utils.border.light};
    margin: 0px !important;
    ${media.xs`
  width: 100%;
  `}
    ${media.sm`
  width:400px
  `}
  }
  &.ant-upload ant-upload-select ant-upload-select-picture-card {
  }
  .ant-upload-list-picture-card-container,
  .ant-upload-list-picture-card .ant-upload-list-item {
    width: 400px;
    height: 178px;
  }
  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail,
  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.utils.background.mid.color};
  }
  .ant-upload-list-picture-card .ant-upload-list-item-thumbnail .anticon,
  .ant-upload-list-picture .ant-upload-list-item-thumbnail .anticon {
  }
  .ant-upload-list-picture-card .ant-upload-list-item-file + .ant-upload-list-item-name {
    color: ${props => props.theme.colors.utils.background.mid.color};
  }
  .ant-upload-list-picture-card .ant-upload-list-item,
  .ant-upload-list-picture .ant-upload-list-item {
    border: 1px solid ${props => props.theme.colors.utils.border.light};
  }
`;

const UploadBox = styled.div`
  ${media.xs`
    width: 100%;
    height: 160px;
    color: #F1E8E6;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
  ${media.sm`
  width:384px
  `}
   ${media.xxl`
   margin-bottom:0px;
  `}
`;

const QuestionsStyle = styled.span`
  ${props => props.theme.typography.h6};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const RequiredError = styled.div`
  ${props => props.theme.typography.subtitle1};
  color: ${props => props.theme.colors.functional.error};
`;

export const UploadButtonComponent = (props: CustomInputComponentProps): ReactElement<CustomInputComponentProps> => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(``);
  const [fileList, setFileList] = useState([]);

  const { field, form } = props;
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleIconRender = (file: any, listType: any) => {
    const fileSufIconList = [{ type: <FilePdfTwoTone />, suf: ['.pdf'] }];
    // console.log(1, file, listType);
    let icon = file.status === 'uploading' ? <LoadingOutlined /> : <PaperClipOutlined />;
    if (listType === 'picture' || listType === 'picture-card') {
      if (listType === 'picture-card' && file.status === 'uploading') {
        icon = <LoadingOutlined />; // or icon = 'uploading...';
      } else {
        fileSufIconList.forEach(item => {
          if (item.suf.includes(file.name.substr(file.name.lastIndexOf('.')))) {
            icon = item.type;
          }
        });
      }
    }
    return icon;
  };
  // @ts-ignore
  const handleChange = ({ fileList: newFileList }) => {
    form.setFieldValue(field.name, newFileList);
    setFileList(newFileList);
  };

  const uploadButton = (
    <UploadBox>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload your CV</div>
    </UploadBox>
  );

  return (
    <>
      <QuestionsStyle>
        <text>Send us your CV</text>
      </QuestionsStyle>
      <UploadStyle
        form={props.form}
        accept={`application/pdf`}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        iconRender={handleIconRender}
        beforeUpload={(file: any) => {
          const isLessThan10MB = file.size / 1024 / 1024 < MAXIMUM_FILE_SIZE;

          if (!isLessThan10MB) {
            message.error(`Plik musi być mniejszy niż 10 MBs`);
          }

          return isLessThan10MB;
        }}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </UploadStyle>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      {form.errors.urlFile && form.touched.urlFile ? <RequiredError>Required</RequiredError> : null}
    </>
  );
};
