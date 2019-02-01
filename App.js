import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';
import {Root} from "native-base";

import LoginScreen from './Components/LoginScreen';
import ScannerScreen from './Components/ScannerScreen';
import ListsScreen from './Components/ListsScreen';
import AccountScreen from './Components/AccountScreen';


class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
      'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });
  }

  render() {
    return (
        <Root>
          <AppNavigator/>
        </Root>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
  },
  ScannerScreen:{
    screen: ScannerScreen,
  },
  ListsScreen:{
    screen: ListsScreen,
  },
  AccountScreen:{
    screen: AccountScreen,
  },
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

const HomeBackground = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
