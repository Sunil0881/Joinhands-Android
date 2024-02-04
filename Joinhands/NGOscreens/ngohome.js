import { styled } from 'nativewind';
import React from 'react';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const Ngohome = () => {
    return ( 
        <StyledView>
        <StyledText>hello home</StyledText>
    </StyledView>
     );
}
 
export default Ngohome;