import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import Yesorno from "./screens/yesorno.js"
import Signin from "./screens/signin.js"
import Role from "./screens/role.js"
import signup from './screens/signup.js';
import Signup_Pass from './screens/signup_pass.js';

import Home from './screens/Home.js';


import DonorDetails1 from './screens/donordetails1.js';
import DonorDetails2 from './screens/donordetails2.js';
import NgoDetails1 from "./screens/ngodetails1.js";
import NgoDetails2 from "./screens/ngodetails2.js";




const Stack = createStackNavigator();


const App = () => { 
  return (
   
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}> 
          <Stack.Screen name="Home" component={Yesorno} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Role" component={Role} />
          <Stack.Screen name="signup" component={signup} />
          <Stack.Screen name="signup_pass" component={Signup_Pass} />

          <Stack.Screen name="Base" component={Home} />

          <Stack.Screen name="donorreg1" component={DonorDetails1} />
          <Stack.Screen name="donorreg2" component={DonorDetails2} />

          <Stack.Screen name="ngoreg1" component={NgoDetails1} />
          <Stack.Screen name="ngoreg2" component={NgoDetails2} />



          

         </Stack.Navigator>
          
    </NavigationContainer>
      
      
   
  );
}

AppRegistry.registerComponent('App', () => App);
export default App;  


