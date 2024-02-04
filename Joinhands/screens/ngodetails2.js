import React from 'react'
import { useState } from 'react';
import { styled } from 'nativewind';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png";
// import RNPickerSelect from 'react-native-picker-select';
// import {Picker} from @react-native-picker/picker;


const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);




const NgoDetails2 = () => {
    const navigation = useNavigation();

    const [Address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState('');
    const [document, setDocument] = useState('');


  return (
    <ImageBackground source={bgjh} style={{ height: '100%', width: '100%'}}>
      <StyledView className=' pt-40'>
        <StyledView className=' m-10'>
                <StyledTextInput className='border-2 border-red-400 rounded-md pb-4 p-2 mt-6'
                  keyboardType="default"
                  placeholder='Address'
                  value={Address}
                  onChangeText={(text) => setAddress(text)}
                />
                <StyledTextInput className='border-2 border-red-400 rounded-md p-2 mt-6'
                  keyboardType="default"
                  placeholder='Pin Code'
                  value={pinCode}
                  onChangeText={(text) => setPinCode(text)}
                />
                <StyledTextInput className='border-2 border-red-400 rounded-md p-2 mt-6'
                  keyboardType="default"
                  placeholder='City'
                  value={city}
                  onChangeText={(text) => setCity(text)}
                />
                <StyledTextInput className='border-2 border-red-400 rounded-md p-2 mt-6'
                  keyboardType="default"
                  placeholder='Document'
                  value={document}
                  onChangeText={(text) => setDocument(text)}
                />

                
                  <StyledView className='pt-8'>
                    <TouchableOpacity
                        style={{ borderRadius: 28, backgroundColor: '#f87171', borderWidth: 1, borderColor: '#f87171', padding: 8, alignItems: 'center', marginHorizontal: 80, marginTop: 10 }} >
                        <StyledText className='text-2xl text-white'>Submit</StyledText>
                    </TouchableOpacity>
                  </StyledView>
                </StyledView>
      </StyledView>
    </ImageBackground>
  )
}

export default NgoDetails2