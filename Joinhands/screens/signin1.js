
import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';


const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);



const Signin1 = () => {
    return ( 
        <StyledView className=' bg-red-400 h-screen pt-52'>
        <StyledText className='text-3xl pl-8 '>Signin to Joinhands</StyledText>
        <StyledTextInput className='flex-3 border-2  border-white rounded-md p-2 '
                      keyboardType="email-address"
                      placeholder='Enter email ID'>
                   </StyledTextInput>
        <TouchableOpacity
            style={{ backgroundColor: 'black', borderRadius: 28,  borderWidth: 1, borderColor: '00000', padding: 8, alignItems: 'center',  marginHorizontal: 96, marginTop: 20 }} >
            <StyledText className=' text-2xl text-white'>Next</StyledText>
        </TouchableOpacity>
        </StyledView>
     
     );
}
 
export default Signin1;