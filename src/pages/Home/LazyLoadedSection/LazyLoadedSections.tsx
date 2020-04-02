import React from 'react';
import { PortfolioStyled } from '../Portfolio/Portfolio';
import { ContactStyled } from '../Contact/Contact';
import { Newsletter } from '../Newsleter/Newsleter';
import { FirebaseProvider } from 'global/Firebase/Firebase';

// eslint-disable-next-line react/display-name
export default () => (
  <FirebaseProvider>
    <PortfolioStyled />
    <ContactStyled />
    <Newsletter />
  </FirebaseProvider>
);
