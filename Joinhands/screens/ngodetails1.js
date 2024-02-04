import React, { useState } from 'react';
import { styled } from 'nativewind';
import { Text, TouchableOpacity, TextInput, View, Alert } from 'react-native'; // Import Alert from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png";
import RNPickerSelect from 'react-native-picker-select';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';

const StyledView = styled(View);
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
  const [fontsLoaded] = useFonts({
    HammersmithOne_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  const navigateTonext = async () => {
    try {
      const response = await fetch('http://192.168.197.178:3000/ngoregistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ngoName,
          ownerName,
          category,
          indexNumber,
          number,
          emailId,
        }),
      });

      if (response.ok) {
        navigation.navigate('ngoreg2', {
          ngoData: {
            ngoName,
            ownerName,
            category,
            indexNumber,
            number,
            emailId,
          },
        });
        console.log(response);
      } else {
        const errorData = await response.json();
        Alert.alert('Registration Failed', `Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'Error occurred. Please try again.');
    }
  };

  return (
    <ImageBackground source={bgjh} style={{ height: '100%', width: '100%' }}>
      <StyledView className=' pt-40 '>
        <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className=' text-3xl text-center font-semibold'> NGO details</StyledText>
        <StyledView className=' mx-10'>
          <StyledTextInput style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 border-red-400 rounded-md p-2 mt-6'
            keyboardType="default"
            placeholder='NGO Name'
            value={ngoName}
            onChangeText={(text) => setNgoname(text)}
          />
          <StyledTextInput style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 border-red-400 rounded-md p-2  mt-6'
            keyboardType="default"
            placeholder='Owner Name'
            value={ownerName}
            onChangeText={(text) => setOwnername(text)}
          />
          <StyledView style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 border-red-400 rounded-md  mt-6'>

            <RNPickerSelect
              placeholder={{ label: 'Select Category', color: "red", value: null }}
              items={Category}
              onValueChange={(value) => setCategory(value)}
            />

          </StyledView>

          <StyledView className=' flex flex-row'>
            <StyledTextInput style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 flex-3 border-red-400 rounded-md p-2 pr-3 mt-6'
              keyboardType="default"
              placeholder='+91'
              value={indexNumber}
              onChangeText={(text) => setIndexNumber(text)}
            />
            <StyledTextInput style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 border-red-400 rounded-md p-2 ml-6 flex-1 mt-6'
              keyboardType="number-pad"
              placeholder='Mobile Number'
              value={number}
              onChangeText={(text) => setNumber(text)}
            />
          </StyledView>
          <StyledTextInput style={{ fontFamily: 'HammersmithOne_400Regular' }} className='border-2 border-red-400 rounded-md p-2 mt-6'
            keyboardType="email-address"
            placeholder='Email Id'
            value={emailId}
            onChangeText={(text) => setEmailId(text)}
          />

          <StyledView className='pt-6'>
            <TouchableOpacity
              style={{ borderRadius: 28, backgroundColor: '#f87171', borderWidth: 1, borderColor: '#f87171', padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 10 }} onPress={navigateTonext} >
              <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='text-2xl text-white'>Next</StyledText>
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
}

export default NgoDetails1;
