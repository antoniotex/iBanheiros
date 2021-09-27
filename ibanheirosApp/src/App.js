import React, { Component } from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import { Provider } from 'react-redux'
import store from './store';
import Home from './views/Home'


const App = () => {
  return (
      <Provider store={store}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </Provider>
  );
};

export default App;
