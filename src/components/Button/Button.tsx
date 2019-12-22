import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Button = styled(AntdButton)`
  && {
    color: ${props => props.theme.colors.utils.text.light};
    background-color: ${props => props.theme.colors.main.secondary};
    height: 36px;
    boder-style: none;
    border-radius: 0px;
    cursor: pointer;
    box-shadow: ${props => props.theme.boxShadow};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    border: none;
    width: 200px;
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
