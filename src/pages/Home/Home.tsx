import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { BannerStyle } from './Banner/Banner';
import styled from 'styled-components';

const FullWeb = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
`;
export const Home: FunctionComponent = () => (
  <FullWeb>
    <Header />
    <BannerStyle />
  </FullWeb>
);
