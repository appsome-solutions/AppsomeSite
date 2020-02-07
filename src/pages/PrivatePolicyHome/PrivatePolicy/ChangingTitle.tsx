import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
export interface PolicyProps {
  name?: string;
  nameOfBusiness?: string;
  webPage?: string;
  officeCity?: string;
  email?: string;
  personalData?: string;
  lastVersionPolicy?: string;
}
const TitleBox = styled.span``;
export const ChangingTitle: FunctionComponent<PolicyProps> = (props: PolicyProps) => {
  const { nameOfBusiness, webPage, officeCity, email, personalData, lastVersionPolicy } = props;
  return (
    <TitleBox>
      {props.name}
      {nameOfBusiness}
      {webPage}
      {officeCity}
      {email}
      {personalData}
      {lastVersionPolicy}
    </TitleBox>
  );
};
