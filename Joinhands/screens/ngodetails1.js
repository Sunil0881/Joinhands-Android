import React, { useState } from 'react';
import { styled } from 'nativewind';
import {  Text, TouchableOpacity, Button, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png";
import RNPickerSelect from 'react-native-picker-select';



const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Category = [
  { label: 'NGO', value: 'n' },
  { label: 'Trust', value: 't' },
  { label: 'Others', value: 'o' },
  
];





const NgoDetails1 = () => {
    const navigation = useNavigation();

    const [ngoName, setNgoname] = useState('');
    const [ownerName, setOwnername] = useState('');
    const [category, setCategory] = useState('');
    const [indexNumber, setIndexNumber] = useState('');
    const [number, setNumber] = useState('');
    const [emailId, setEmailId] = useState('');


    const navigateTonext = () => {
      navigation.navigate('ngoreg2');
  }

  return (
    <ImageBackground source={bgjh} style={{ height: '100%', width: '100%'}}>
        <StyledView className=' pt-40 '>
            <StyledText className=' text-3xl text-center font-semibold'> NGO details</StyledText>
            <StyledView className=' mx-10'>
              <StyledTextInput className='border-2 border-red-400 rounded-md p-2 mt-6'
                keyboardType="default"
                placeholder='NGO Name'
                value={ngoName}
                onChangeText={(text) => setNgoname(text)}
              />
              <StyledTextInput className='border-2 border-red-400 rounded-md p-2  mt-6'
                keyboardType="default"
                placeholder='Owner Name'
                value={ownerName}
                onChangeText={(text) => setOwnername(text)}
              />
              <StyledView className='border-2 border-red-400 rounded-md  mt-6'>
                
                <RNPickerSelect 
                    placeholder={{ label: 'Select Category', color:"red", value: null }}
                    items={Category}
                    onValueChange={(value) => setCategory(value)}  
                />
           
              </StyledView> 
              
              <StyledView className=' flex flex-row'>
                <StyledTextInput className='border-2 flex-3 border-red-400 rounded-md p-2 pr-3 mt-6'
                  keyboardType="default"
                  placeholder='+91'
                  value={indexNumber}
                  onChangeText={(text) => setIndexNumber(text)}
                />
                <StyledTextInput className='border-2 border-red-400 rounded-md p-2 ml-6 flex-1 mt-6'
                  keyboardType="default"
                  placeholder='Mobile Number'
                  value={number}
                  onChangeText={(text) => setNumber(text)}
                />
              </StyledView>
              <StyledTextInput className='border-2 border-red-400 rounded-md p-2 mt-6'
                keyboardType="default"
                placeholder='Email Id'
                value={emailId}
                onChangeText={(text) => setEmailId(text)}
              />

              <StyledView className='pt-6'>
                <TouchableOpacity
                    style={{ borderRadius: 28, backgroundColor: '#f87171', borderWidth: 1, borderColor: '#f87171', padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 10 }} onPress={navigateTonext} >
                    <StyledText className='text-2xl text-white'>Next</StyledText>
                </TouchableOpacity>
              </StyledView>
            </StyledView>
        </StyledView>
    </ImageBackground>
    

  )
}

export default NgoDetails1;