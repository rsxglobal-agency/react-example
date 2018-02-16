import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from "react-navigation";


// routes
import Login from "./screens/login/login";
// end routes

const AppNavigator = StackNavigator(
  {
    //Drawer: { screen: Drawer },
    Login: { screen: Login }

  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default class App extends Component {
  state = { fontLoaded: false, };

  async componentDidMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({ fontLoaded: true });
  }

	render() {
    return (this.state.fontLoaded ? <AppNavigator /> : null);
	}
}

