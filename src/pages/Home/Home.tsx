import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { Newsletter } from './Newsleter/Newsleter';
import { TheProcess } from './TheProcess/TheProcess';
import { Footer } from './Footer/Footer';

export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
    <Newsletter />
    <Footer />
  </>
);
