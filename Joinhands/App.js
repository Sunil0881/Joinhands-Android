import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import Yesorno from "./screens/yesorno.js"
import Signin1 from "./screens/signin1.js"

const Stack = createStackNavigator();


const App = () => { 
  return (
   
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}> 
          <Stack.Screen name="Home" component={Yesorno} />
          <Stack.Screen name="Signin" component={Signin1} />
          
         </Stack.Navigator>
          
    </NavigationContainer>
      
      
   
  );
}

AppRegistry.registerComponent('App', () => App);
export default App;  


