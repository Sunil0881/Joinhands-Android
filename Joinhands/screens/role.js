import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png"
import ngo from "../assets/ngo.png"
import donor from "../assets/doner.png"

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const Role = () => {

    const navigation = useNavigation();

    const handleNGOClick = () => {
      // Navigate to the next page for NGO/Trust
      navigation.navigate(''); // Replace 'NGOPage' with the actual name of your NGO page
    };
  
    const handleDonorClick = () => {
      // Navigate to the next page for Donor/Hotel
      navigation.navigate('donorreg1'); // Replace 'DonorPage' with the actual name of your Donor page
    };

    
    return ( 
        <ImageBackground source={bgjh} style={{width: '100%', height: '100%'}}>
        <StyledView className='flex justify-center items-center '>
            <StyledText className='text-black text-3xl pt-40 items-center'>Who are you ? </StyledText>
            <StyledView className='items-center'>
            <TouchableOpacity onPress={handleNGOClick}>
            <StyledView className='flex  pt-5 items-center '>
                <Image source={ngo} ></Image>
                <StyledText className='text-2xl pt-1 text-red-600 '>NGO / Trust</StyledText>
            </StyledView>
            </TouchableOpacity>
            <StyledText className='text-xl'>---------- or ----------</StyledText>
            <TouchableOpacity onPress={handleDonorClick}>
            <StyledView className='flex pt-3 items-center '>
                <Image source={donor} ></Image>
                <StyledText className='text-2xl text-red-600 pt-1'>Donor/Hotel</StyledText>
            </StyledView>
            </TouchableOpacity>
            </StyledView>
            </StyledView>


        
        </ImageBackground>
     );
}
 
export default Role;