import React from 'react'
import bgjh from '../assets/bgjh.png';
import { styled } from 'nativewind';
import AppLoading from 'expo-app-loading';
import { ImageBackground } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
// import * as SplashScreen from "expo-splash-screen";


// SplashScreen.preventAutoHideAsync();
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);




const Home = () => {
    const [fontsLoaded] = useFonts({
      HammersmithOne_400Regular,
        // Add more fonts if needed
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
      }


  return (
    <ImageBackground source={bgjh}>
    <StyledView className='h-full'>
        <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='font-Ham text-4xl py-10 pl-20'>Joinhands</StyledText>
        
    </StyledView>
    </ImageBackground>
  )
}

export default Home