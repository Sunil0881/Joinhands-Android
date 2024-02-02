import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';


const  StyledView = styled(View);
const StyledText = styled(Text);


const yesorno = () => {
    return ( 
             <StyledView>
                <StyledText>Are you new to our community ?</StyledText>
                <TouchableOpacity
                    style={{ backgroundColor: 'orange', borderRadius: 10,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateTospeed}>
                    <StyledText className=' text-2xl text-white'>Speed ⌛</StyledText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'orange', borderRadius: 10,  borderWidth: 1, borderColor: '#ffffff', padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateTospeed}>
                    <StyledText className=' text-2xl text-white'>Speed ⌛</StyledText>
                </TouchableOpacity>
             </StyledView>
     );
}
 
export default yesorno;