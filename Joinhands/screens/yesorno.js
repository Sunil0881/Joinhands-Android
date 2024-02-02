import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png"


const  StyledView = styled(View);
const StyledText = styled(Text);


const Yesorno = () => {

    const navigation = useNavigation();

    const navigateTosignin = () => {
        navigation.navigate('Signin');
    }

    const navigateTosignup = () => {
        navigation.navigate('Role');
    }

    return ( 
        <ImageBackground source={bgjh} style={{width: '100%', height: '100%'}}>
        <StyledView className=' h-screen pt-52'>
    <StyledText className='text-3xl pl-10 text-black'>Are you new to our community ?</StyledText>
    <StyledView className='pt-20'>
        <TouchableOpacity
            style={{ borderRadius: 28, backgroundColor: '#f87171', borderWidth: 1, borderColor: '#f87171', padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={navigateTosignup}>
            <StyledText className='text-2xl text-white'>Yes</StyledText>
        </TouchableOpacity>
    </StyledView>
    <StyledView className='pt-6'>
        <TouchableOpacity
            style={{ borderRadius: 28, backgroundColor: '#f87171', borderWidth: 1, borderColor: '#f87171', padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={navigateTosignin}>
            <StyledText className='text-2xl text-white'>No</StyledText>
        </TouchableOpacity>
    </StyledView>
</StyledView>
 </ImageBackground>


    
     );
}
 
export default Yesorno;