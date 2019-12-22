import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { BodyPartI } from './BodyPartI/BodyFull';
import styled from 'styled-components';

const FullWeb = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
`;
export const Home: FunctionComponent = () => (
  <FullWeb>
    <Header />
    <BodyPartI />
  </FullWeb>
);
