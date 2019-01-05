import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


import { createSwitchNavigator, createStackNavigator,createDrawerNavigator,createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import CircleScreen from './screens/CircleScreen'
import PostScreen from './screens/PostScreen'
import InboxScreen from './screens/InboxScreen'
import ProjectScreen from './screens/ProjectScreen'


//firebase.initializeApp(firebaseConfig);


const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})
const AppTabNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
  },
  Circle:{
    screen:CircleScreen
  },
  Inbox:{
    screen:InboxScreen
  },
  Project:{
    screen:ProjectScreen
  }
  
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'ONE CIRCLE',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home:AppStackNavigator
})
export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5
  },
});
