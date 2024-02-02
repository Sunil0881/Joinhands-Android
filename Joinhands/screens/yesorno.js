import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const  StyledView = styled(View);
const StyledText = styled(Text);


const Yesorno = () => {

    const navigation = useNavigation();

    const navigateTosignin = () => {
        navigation.navigate('Signin');
    }

    return ( 
        <StyledView className=' bg-red-400 h-screen pt-52'>
            <StyledText className='text-3xl pl-10 '>Are you new to our community ?</StyledText>
            <StyledView className='pt-24'>
            <TouchableOpacity
                style={{  borderRadius: 28,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center',  marginHorizontal:96, marginTop: 20 }} >
                <StyledText className=' text-2xl text-white'>Yes</StyledText>
            </TouchableOpacity>
            <TouchableOpacity
                style={{  borderRadius: 28,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center',  marginHorizontal: 96, marginTop: 20 }} onPress={navigateTosignin}>
                <StyledText className=' text-2xl text-white'>No</StyledText>
            </TouchableOpacity>
            </StyledView>
        </StyledView>
     );
}
 
export default Yesorno;