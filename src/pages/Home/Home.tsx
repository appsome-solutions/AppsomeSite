import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { NewsleterStyle } from './Newsleter/Newsleter';
import { TheProcess } from './TheProcess/TheProcess';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <TheProcess />
    <OurServices />
    <NewsleterStyle />
  </>
);
