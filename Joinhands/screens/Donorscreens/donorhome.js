import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';


const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const Donorhome = () => {

    const [fontsLoaded] = useFonts({
        HammersmithOne_400Regular,
          // Add more fonts if needed
      });
      if (!fontsLoaded) {
          return null;
        }

        
    return ( 
        <StyledView >
            <StyledView className='items-center'>
              <StyledText className='text-red-400 text-3xl pt-12 pb-5 ' style={{ fontFamily: 'HammersmithOne_400Regular' }} >Joinhands</StyledText>
            </StyledView>
            <StyledView className='items-center border-2 border-red-400 pb-3 mx-7 rounded-3xl bg-red-400'  >
                <StyledView className='flex flex-row gap-10 pt-10 '>
                    <StyledView className='items-center'>
                        <StyledText className=' text-5xl'>0</StyledText>
                        <StyledText className='text-lg font-semibold'>Task Completed</StyledText>
                    </StyledView>
                    <StyledView className='items-center' >
                        <StyledText className=' text-5xl'>0</StyledText>
                        <StyledText className='text-lg font-semibold'>Served People</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView>
           
            </StyledView>
        </StyledView>
     );
}
 
export default Donorhome;