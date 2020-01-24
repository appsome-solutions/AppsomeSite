import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Button = styled(AntdButton)`
  && {
    color: ${props => props.theme.colors.utils.text.light};
    background-color: ${props => props.theme.colors.main.secondary};
    height: 36px;
    border-radius: 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    ${props => props.theme.typography.button};
    line-height: 16px;
    text-align: center;
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
