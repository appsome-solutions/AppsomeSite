import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CoreTheme } from './global/Themes/CoreTheme';
import { RWDProvider } from './global/RWD';
import { GlobalStyles } from './global/GlobalStyles/GlobalStyles';
import { ErrorHandler } from './global/ErrorHandler/ErrorHandler';

import { HeaderPageFooter } from 'global/Layouts/HeaderPageFooter/HeaderPageFooter';
import { AppRouter } from 'global/AppRouter/AppRouter';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={CoreTheme}>
      <RWDProvider>
        <Router>
          <HeaderPageFooter>
            <GlobalStyles />
            <ErrorHandler>
              <AppRouter />
            </ErrorHandler>
          </HeaderPageFooter>
        </Router>
      </RWDProvider>
    </ThemeProvider>
  );
};

export default App;
