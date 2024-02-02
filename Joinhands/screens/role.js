import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png"
import ngo from "../assets/ngo.png"
import donor from "../assets/doner.png"

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const Role = () => {
    return ( 
        <ImageBackground source={bgjh} style={{width: '100%', height: '100%'}}>
        <StyledView>
            <StyledText className='text-black text-3xl pt-52 pl-10'>Who are you ? </StyledText>
            <StyledView className='flex flex-row pt-10'>
                <ImageBackground source={ngo} style={{width: '59%', height: '180%'}}></ImageBackground>
                <StyledText className='text-2xl '>NGO / Trust</StyledText>
            </StyledView>
            <StyledView className='flex flex-row pt-28'>
                <ImageBackground source={donor} style={{width: '59%', height: '180%'}}></ImageBackground>
                <StyledText className='text-2xl '>Donor/Hotel</StyledText>
            </StyledView>


        </StyledView>
        </ImageBackground>
     );
}
 
export default Role;