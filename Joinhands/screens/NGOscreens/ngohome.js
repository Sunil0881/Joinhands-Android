import { styled } from 'nativewind';
import React from 'react';

import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
import Icon from 'react-native-vector-icons/FontAwesome'



const  StyledView = styled(View);
const StyledText = styled(Text);



const Ngohome= () => {

    const [fontsLoaded] = useFonts({
        HammersmithOne_400Regular,
          // Add more fonts if needed
      });
      if (!fontsLoaded) {
          return null;
        }

    const navigation = useNavigation();

    const goTofood = () => {
         navigation.navigate('ngofood'); 
    };
            
    const goToprofile = () => {
        navigation.navigate('ngoprofile'); 
    };  
        
    const goTohome = () => {
        navigation.navigate('ngohome'); 
    };  

    

        
    return ( 
        <StyledView className='h-full'>
            <StyledView className='items-center '>
              <StyledText className='text-red-400 text-3xl pt-12 pb-5 ' style={{ fontFamily: 'HammersmithOne_400Regular' }} >Joinhands</StyledText>
            </StyledView>
            <StyledText>ngo home</StyledText>
            <StyledView className='items-center  bg-red-400 pb-3 mx-7 rounded-3xl ' style={{elevation: 10}} >
                <StyledView className='flex flex-row gap-10 pt-10 '>
                    <StyledView className='items-center'>
                        <StyledText className=' text-5xl text-white'>0</StyledText>
                        <StyledText className='text-lg font-semibold text-white'>Task Completed</StyledText>
                    </StyledView>
                    <StyledView className='items-center' >
                        <StyledText className=' text-5xl text-white'>0</StyledText>
                        <StyledText className='text-lg font-semibold text-white'>Served People</StyledText>
                    </StyledView>
                </StyledView>
            </StyledView >
            <StyledView className=' bg-white  pt-1 absolute bottom-0 w-screen  rounded-md'style={{elevation: 10}} >
                <StyledView className='flex flex-row justify-around '>
                <Icon
                    name="home"
                    size={50}
                    color="#f87171"
                    onPress={goTohome}
                    />
                <Icon
                    name="cutlery"
                    size={45}
                    color="#f87171"
                    onPress={goTofood}
                    />
                <Icon
                    name="user"
                    size={50}
                    color="#f87171"
                    onPress={goToprofile}
                  />
                </StyledView>
            </StyledView>
        </StyledView>
     );
}
 
export default Ngohome;