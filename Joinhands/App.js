import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import Yesorno from "./screens/yesorno.js"

const Stack = createStackNavigator();


const App = () => { 
  return (
   
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}> 
          <Stack.Screen name="Home" component={Yesorno} />
          
        </Stack.Navigator>
          
       

      </NavigationContainer>
      
      
   
  );
}

AppRegistry.registerComponent('App', () => App);
export default App;  


