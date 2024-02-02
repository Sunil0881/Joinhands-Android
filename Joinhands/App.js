import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import Yesorno from "./screens/yesorno"

const Stack = createStackNavigator();


const App = () => { 
  return (
   
    <NavigationContainer>
        
          <Stack.Screen name="Home" component={Yesorno} />
          
       

      </NavigationContainer>
      
      
   
  );
}

AppRegistry.registerComponent('App', () => App);
export default App;  


