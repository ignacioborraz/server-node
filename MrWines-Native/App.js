import React from "react";
import Navigation from "./Navigation";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './src/pages/redux/reducers/mainReducer'
import { createStore, applyMiddleware } from 'redux';

export default function App() {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
    <Navigation/>
    </Provider>
  );

}
