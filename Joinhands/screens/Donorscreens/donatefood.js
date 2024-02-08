import { styled } from 'nativewind';
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
import Icon from 'react-native-vector-icons/FontAwesome'



const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);



const Donatefood = () => {

    const [Category, setCategory] = useState('');

    const [fontsLoaded] = useFonts({
        HammersmithOne_400Regular,
          // Add more fonts if needed
      });
      if (!fontsLoaded) {
          return null;
        }

    const navigation = useNavigation();

    const goTofood = () => {
        navigation.navigate('donorfood'); 
    };
        
    const goToprofile = () => {
        navigation.navigate('donorprofile'); 
    };  
    
    const goTohome = () => {
        navigation.navigate('donorhome'); 
    };  
        
   
    

        
    return ( 
        <StyledView className='h-full'>
            <StyledView className='items-center '>
              <StyledText className='text-red-400 text-3xl pt-12 pb-5 ' style={{ fontFamily: 'HammersmithOne_400Regular' }} >Joinhands</StyledText>
            </StyledView>

            <StyledText>donor food</StyledText>

            <StyledView className='border-2 border-red-400 rounded-md mt-6'>
                <RNPickerSelect
                style={{ fontFamily: 'HammersmithOne_400Regular' }}
                placeholder={{ label: 'Select Type', color: 'red', value: null }}
                items={Category}
                onValueChange={(value) => setCategory(value)}
                />
            </StyledView>
           
          

            
            <StyledView className=' bg-white  pt-1 absolute bottom-0 w-screen  rounded-md'style={{elevation: 10}} >
                <StyledView className='flex flex-row justify-around '>
                <Icon
                    name="home"
                    size={50}
                    color="#f87171"
                    onPress={goTohome}
                    />
                <Icon
                    name="plus"
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
 
export default Donatefood;