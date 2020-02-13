import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { CoreTheme } from './global/Themes/CoreTheme';
import { RWDProvider } from './global/RWD';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';
import { AppRouter } from './global/AppRouter/AppRouter';
import { client } from 'global/ApolloClient/ApolloClient';
import { Modal } from 'antd';
import { FirebaseProvider } from 'global/Firebase/Firebase';
import { HeaderPageFooter } from 'global/Layouts/HeaderPageFooter/HeaderPageFooter';

const App: FunctionComponent = () => {
  Modal.info({
    title: 'In progress...',
    content: (
      <div>
        <h5>Website is not done yet...</h5>
      </div>
    ),
    onOk: () => {},
  });

  return (
    <ThemeProvider theme={CoreTheme}>
      <ApolloProvider client={client}>
        <RWDProvider>
          <Router>
            <HeaderPageFooter>
              <GlobalStyles />
              <ErrorHandler>
                <FirebaseProvider>
                  <AppRouter />
                </FirebaseProvider>
              </ErrorHandler>
            </HeaderPageFooter>
          </Router>
        </RWDProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
