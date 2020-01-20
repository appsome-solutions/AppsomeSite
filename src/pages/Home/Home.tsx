import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { PortfolioStyled } from './Portfolio/Portfolio';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <PortfolioStyled />
  </>
);
