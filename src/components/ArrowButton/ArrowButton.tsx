import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const ArrowButton = styled(AntdButton)`
  && {
    width: 36px;
    height: 36px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    background-color: ${props => props.theme.colors.main.primary};
    ${props => props.theme.typography.button};
    color: ${props => props.theme.colors.utils.background.light};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    cursor: pointer;
    border: none
    &:disabled {
      cursor: not-allowed;
      background-color: ${props => props.theme.colors.functional.hover};
    }
    &&:focus,
    &&:hover {
      color: ${props => props.theme.colors.utils.background.light};
      background-color: ${props => props.theme.colors.main.primary};
    }
  }
`;
