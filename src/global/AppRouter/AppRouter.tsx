import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { PrivacyPolicyHome } from '../../pages/PrivatePolicyHome/PrivatePolicyHome';

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy-policy" exact component={PrivacyPolicyHome} />
      </Switch>
    </>
  );
};
