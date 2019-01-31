import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Components/LoginScreen';
import { Font } from 'expo';
import {Root} from "native-base"


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
  // HomeScreen:{
  //   screen: HomeScreen,
  // },
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
