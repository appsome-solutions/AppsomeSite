import { TermOfService } from 'pages/TermOfService/TermOfService';
import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { PrivacyPolicy } from 'pages/PrivatePolicy/PrivatePolicy';
import { NotFound } from 'pages/404/NotFound';

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
              abbreviation="AS"
              nameOfBusiness="Software Home Patryk Janik"
              officeCity=" office in Szczecin, ul. Zbożowa 4A"
              webPage="www.appsome-solutions.com"
              personalData="The controller of your Personal data: Software Home Patryk Janik
          with registered office in Szczecin (hereinafter referred to as “Appsome Solutions” or “we”) at ul.Zbożowa 4A."
              email="patryk.janik@appsome-solutions.com"
              lastVersionPolicy="03.10.2020"
              personalDataOffice=" Business Link, ul. Zbożowa 4A, 70-464 Szczecin)."
            />
          )}
        />
        <Route
          path="/term-of-service"
          exact
          component={() => <TermOfService name="AppSome Solutions" nameOfBusiness="AppSome Solutions" />}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};
