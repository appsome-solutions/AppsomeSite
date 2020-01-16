import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { TheProcess } from './TheProcess/TheProcess';
import { OurServices } from './OurService/OurService';
import { PortfolioStyled } from './Portfolio/Portfolio';
import { ContactStyled } from './Contact/Contact';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
    <PortfolioStyled />
    <ContactStyled />
  </>
);
