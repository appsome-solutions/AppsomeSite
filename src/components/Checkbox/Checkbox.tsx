import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

export const Checkbox = styled(AntCheckbox)`
  &&& {
    .ant-checkbox-checked .ant-checkbox-inner:after {
      border-color: ${props => props.theme.colors.main.primary};
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      color: black;
      background-color: ${props => props.theme.colors.utils.background.mid.color};
    }
    .ant-checkbox-inner {
      border: 1px solid ${props => props.theme.colors.utils.border.light};
      width: 20px;
      height: 20px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 3px rgba(50, 50, 93, 0.15);
      border-radius: 0;
      background-color: ${props => props.theme.colors.main.primary};
    }
  }
`;
