import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { TermOfServiceHome } from '../../pages/TermOfService/TermOfServiceHome';

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/term-of-service" exact component={TermOfServiceHome} />
      </Switch>
    </>
  );
};
