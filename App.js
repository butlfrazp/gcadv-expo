import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';
import reducers from './src/reducers'
import Router from './src/components/RouterComponent'
import Drawer from './src/components/Drawer';
import { toggleDrawer } from './src/actions'
import AppComponent from './src/components/App'
import About from './src/components/About/About';

var config = {
    apiKey: "AIzaSyBMFBVW_FJeYthKQmbHfLzHpIuE93J_AKg",
    authDomain: "gcadv-project.firebaseapp.com",
    databaseURL: "https://gcadv-project.firebaseio.com",
    projectId: "gcadv-project",
    storageBucket: "gcadv-project.appspot.com",
    messagingSenderId: "881878762237"
  };
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
}
