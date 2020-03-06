import { TermOfService } from 'pages/TermOfService/TermOfService';
import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { PrivacyPolicy } from 'pages/PrivatePolicy/PrivatePolicy';

export const AppRouter: FunctionComponent = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/privacy-policy"
          exact
          component={() => (
            <PrivacyPolicy
              name="Appsome Solutions"
              nameOfBusiness=" – The Software House sp. z o.o."
              officeCity="office in Gliwice, ul. Dolnych Wałów"
              webPage="appsome-solutions.com"
              personalData="The controller of your Personal data: The Software House
          sp. z o.o. with registered office in Gliwice (hereinafter referred to as “TSH” or “we”) at ul. Dolnych Wałów
          8."
              email="Email for admin"
              lastVersionPolicy="The date of the last version of the policy is 11/06/2018."
              personalDataOffice=" Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw)."
            />
          )}
        />
        <Route
          path="/term-of-service"
          exact
          component={() => <TermOfService name="AppSome Solutions" nameOfBusiness="AppSome Solutions" />}
        />
      </Switch>
    </>
  );
};
