import React, { FunctionComponent, Suspense } from 'react';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { TheProcess } from './TheProcess/TheProcess';

const LazyLoadedSections = React.lazy(() => import('./LazyLoadedSection/LazyLoadedSections'));

export const Home: FunctionComponent = () => (
  <>
    <Banner />
    <TheProcess />
    <OurServices />
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedSections />
    </Suspense>
  </>
);
