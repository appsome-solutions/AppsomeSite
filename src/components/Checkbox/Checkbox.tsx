import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = styled(AntCheckbox)`
  &&& {
    .ant-checkbox-checked .ant-checkbox-inner:after {
      border-color: ${props => props.theme.colors.main.primary};
      left: 5px;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${props => props.theme.colors.utils.background.mid.color};
    }
    .ant-checkbox-inner {
      border: 1px solid ${props => props.theme.colors.utils.border.light};
      width: 20px;
      height: 20px;
      border-radius: 0;
      background-color: ${props => props.theme.colors.main.primary};
    }
  }
`;
