import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Button = styled(AntdButton)`
  && {
    color: ${props => props.theme.colors.utils.text.light};
    background-color: ${props => props.theme.colors.main.secondary};
    height: 36px;
    border-radius: 0px;
    cursor: pointer;
    box-shadow: ${props => props.theme.boxShadow};
    ${props => props.theme.typography.button};
    line-height: 16px;
    text-align: center;
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    &:disabled {
      cursor: not-allowed;
      background-color: ${props => props.theme.colors.functional.hover};
    }
    &&:focus,
    &&:hover {
      color: ${props => props.theme.colors.utils.text.light};
      background-color: ${props => props.theme.colors.functional.hover};
    }
  }
`;
