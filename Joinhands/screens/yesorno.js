import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';


const  StyledView = styled(View);
const StyledText = styled(Text);


const Yesorno = () => {
    return ( 
        <StyledView className=' bg-red-400 h-screen pt-44'>
        <StyledText className='text-3xl pl-10 '>Are you new to our community ?</StyledText>
        <StyledView className='pt-28'>
        <TouchableOpacity
            style={{  borderRadius: 28,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center',  marginHorizontal:96, marginTop: 20 }}>
            <StyledText className=' text-2xl text-white'>Yes</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
            style={{  borderRadius: 28,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center',  marginHorizontal: 96, marginTop: 20 }} >
            <StyledText className=' text-2xl text-white'>No</StyledText>
        </TouchableOpacity>
        </StyledView>
     </StyledView>
     );
}
 
export default Yesorno;