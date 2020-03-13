import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CounterApp from './CounterApp'
import { createStore } from 'redux';

const intialState = {
  count: 0
}
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'Increase': return{ count:state.count+1}
    case 'Decrease': return{ count:state.count-1}
  }

  return state

}
const store = createStore(reducer);
export default class App extends Component {

  render() {

    return (
<Provider store={store}>

        <CounterApp />

        </Provider>

    )
  }
}