
import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png"

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);



const Signin = () => {
    return ( 
        <ImageBackground source={bgjh} style={{width: '100%', height: '100%'}}>
        <StyledView className='  h-screen pt-52'>
        <StyledText className='text-3xl pl-10 text-black'>Signin to Joinhands</StyledText>
       
        <StyledTextInput className=' border-2  border-red-400 rounded-md p-2 mx-10 mt-16'
                      keyboardType="email-address"
                      placeholder='Enter mail Id'>
                   </StyledTextInput>
                   
        <StyledTextInput className=' border-2  border-red-400 rounded-md p-2 mx-10 mt-10 mb-7'
                      keyboardType="visible-password"
                      placeholder='Enter Password'>
                   </StyledTextInput>
        <TouchableOpacity
            style={{ backgroundColor: '#f87171', borderRadius: 28,  borderWidth: 1, borderColor: '#fca5a5', padding: 8, alignItems: 'center',  marginHorizontal: 44, marginTop: 20 }} >
            <StyledText className=' text-xl text-white'>Next</StyledText>
        </TouchableOpacity>
        <StyledText className='pt-16 pl-20'>Don't have an account ? <StyledText className='text-red-600'>Sign Up</StyledText></StyledText>
        </StyledView>
        </ImageBackground>
     );
}
 
export default Signin;