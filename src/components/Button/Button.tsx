import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import React from 'react';

export type ButtonType = 'primary' | 'secondary';
export interface LocalButtonProps {
  type?: ButtonType;
  className?: string;
  svgLink?: string;
  children?: React.ReactNode;
}

export type ButtonProps = AntdButtonProps | LocalButtonProps;

const ButtonStyled = styled(({ children, type, ...rest }) => <AntdButton {...rest}>{children}</AntdButton>)`
  && {
    color: ${props => props.theme.colors.utils.text.light};
    background-color: ${props =>
      props.type === 'primary' ? props.theme.colors.main.primary : props.theme.colors.main.secondary};
    height: 36px;
    border-radius: 0;
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    ${props => props.theme.typography.button};
    line-height: 16px;
    text-align: center;
    border: none;
    &:disabled {
      cursor: not-allowed;
      background-color: ${props =>
        props.type === 'primary' ? props.theme.colors.main.primary : props.theme.colors.functional.hover};
    }
    &&:hover {
      color: ${props => props.theme.colors.utils.text.light};
      background-color: ${props =>
        props.type === 'primary' ? props.theme.colors.functional.primary.hover : props.theme.colors.functional.hover};
    }
  }
`;

export const Button = ({ type, children, className, ...restProps }: ButtonProps) => {
  return (
    <ButtonStyled type={type} className={className} {...restProps}>
      {children}
    </ButtonStyled>
  );
};
