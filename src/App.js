import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import Routes from './routes/user.routes';

const App = () => {
  return (
  <NavigationContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#000"/>
        <Routes />
        </PersistGate>
      </Provider>
  </NavigationContainer>
  )
};

export default App;










