import { scroller } from 'react-scroll';

export type ScrollPlaceType = 'Process' | 'Service' | 'Portfolio' | 'Contact';

export const scrollTo = (place: string) => {
  // setTimeout because we want to run scroll after page redirection
  setTimeout(() => {
    // JS trick to get information about scroll direction
    // @ts-ignore
    const isBehindPlace = document.getElementById(place).offsetTop < window.scrollY;

    scroller.scrollTo(place, { duration: 500, offset: isBehindPlace ? -99 : 0, smooth: true });
  }, 0);
};
