import React, { FunctionComponent } from 'react';
import { Header } from '../../global/Layouts/FooterAndHeader/Header/Header';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { Newsletter } from './Newsleter/Newsleter';
import { TheProcess } from './TheProcess/TheProcess';
import { Footer } from '../../global/Layouts/FooterAndHeader/Footer/Footer';
import { ContactStyled } from './Contact/Contact';
import { PortfolioStyled } from './Portfolio/Portfolio';
import { CookieBar } from './CookieBar/CookiesBar';

export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
    <PortfolioStyled />
    <ContactStyled />
    <Newsletter />
    <Footer />
    <CookieBar />
  </>
);
