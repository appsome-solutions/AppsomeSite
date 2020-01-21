import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { TheProcess } from './TheProcess/TheProcess';
import { OurServices } from './OurService/OurService';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
  </>
);
