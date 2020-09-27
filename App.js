

import React from 'react';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Router from "./src/Router";
import Store from './src/Redux/store'

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <Router />
        </ApplicationProvider>
      </Provider>
    </>
  );
};


export default App;
