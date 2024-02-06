import React from 'react'
import bgjh from '../assets/bgjh.png';
import { styled } from 'nativewind';
import { ImageBackground } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
// import * as SplashScreen from "expo-splash-screen";
import { StyleSheet } from 'react-native';

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
        return null;
      }


  return (
    <ImageBackground source={bgjh}>
    <StyledView className='h-full bg-[#F65F5F]' style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}>
        <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='font-Ham text-4xl pt-20 pl-20'>Joinhands</StyledText>
        <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='text-center text-2xl'>Feed the Needs</StyledText>
    </StyledView>
    </ImageBackground>
  )
}

export default Home