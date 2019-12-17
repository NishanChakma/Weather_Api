import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Route from './src/routes/index';
import 'react-native-gesture-handler';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
