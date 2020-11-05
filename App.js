
import React from 'react'
import {View ,Text } from 'react-native'
import SignupScreen from './src/screens/SignUp'
import LoginScreen from './src/screens/Login'
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from './src/screens/Inbox';
import Conversations from './src/screens/Conversations';
const RootStack = createStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>

      <RootStack.Navigator >
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <RootStack.Screen name="SignupScreen" component={SignupScreen} /> */}
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Inbox" component={Inbox} />
        <RootStack.Screen name="Conversations" component={Conversations} />
        


     

    </RootStack.Navigator>
      </NavigationContainer>
    // <View>
    //   <Text>HI</Text>
    // </View>
  )
}
export default App

