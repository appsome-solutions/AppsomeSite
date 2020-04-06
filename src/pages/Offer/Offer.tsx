import React, { useEffect } from 'react';
// @ts-ignore
import { Document, Page } from 'react-pdf';

import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import DownloadSvg from './download.svg';
import { media } from 'global/RWD';
import { useParams } from 'react-router-dom';
import { FirebaseProvider } from 'global/Firebase/Firebase';
import { useFirebase } from 'global/Firebase/FirebaseContext';

const OfferWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DownloadWrapper = styled.div`
  width: 100%;
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;

  ${media.xs`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    margin-bottom: 0;
  `}
  ${media.lg`
    position: static;
    margin-bottom: 24px;
  `}
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: 600;
    color: #361d32;
    margin: 0;
  }
`;

const removeWhenVisible = (selector: string) => {
  const checkExist = setInterval(function() {
    if (document.querySelector(selector)) {
      // @ts-ignore
      document.querySelector(selector).setAttribute('style', 'display: none!important');

      clearInterval(checkExist);
    }
  }, 100);
};

const StyledDocument = styled(Document)`
  ${media.xs`
    max-height: calc(100vh - 57px);
    max-width: 100vw;
    overflow: scroll;
    margin-bottom: 57px;
  `}
  ${media.lg`
    overflow: auto;
    max-height: unset;
    max-width: unset;
  `}
`;

const DOCUMENT_WIDTH = 1366;

const withFirebaseProvider = (Component: React.ElementType) => () => (
  <FirebaseProvider>
    <Component />
  </FirebaseProvider>
);

export const Offer = withFirebaseProvider(() => {
  const { offerId } = useParams();
  const { db } = useFirebase();

  useEffect(() => {
    removeWhenVisible('#hubspot-messages-iframe-container');
    removeWhenVisible('#footer-shape');
    removeWhenVisible('.Footer');
    removeWhenVisible('.Header');

    db.collection('offer-visits').add({
      offerId: offerId,
    });
  });

  const SCALE = DOCUMENT_WIDTH > window.innerWidth ? window.innerWidth / DOCUMENT_WIDTH : 1;

  return (
    <OfferWrapper>
      <DownloadWrapper>
        <StyledLink href="/offer.pdf" download>
          <Icon alt="Download Icon" svgLink={DownloadSvg} />
          <p>Download pdf</p>
        </StyledLink>
      </DownloadWrapper>
      <div>
        <StyledDocument file="/offer.pdf" loading="Please wait, rendering pdf..." renderMode="svg">
          <Page pageNumber={1} scale={SCALE} />
        </StyledDocument>
      </div>
    </OfferWrapper>
  );
});
