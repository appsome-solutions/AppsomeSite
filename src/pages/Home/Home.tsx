import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { PortfolioStyled } from './Portfolio/Portfolio';
import { ContactStyled } from './Contact/Contact';
import { NewsleterStyle } from './Newsleter/Newsleter';
import { TheProcess } from './TheProcess/TheProcess';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
    <PortfolioStyled />
    <ContactStyled />
    <NewsleterStyle />
  </>
);
