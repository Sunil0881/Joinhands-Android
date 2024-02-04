import React, { useState } from 'react';
import { Alert } from 'react-native';
import { styled } from 'nativewind';
import { Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import bgjh from "../assets/bgjh.png";
import RNPickerSelect from 'react-native-picker-select';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Category = [
  { label: 'Restaurant', value: 'r' },
  { label: 'Catering', value: 'c' },
  { label: 'Others', value: 'o' },
];

const DonorDetails1 = () => {
  const navigation = useNavigation();
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [category, setCategory] = useState('');
  const [indexNumber, setIndexNumber] = useState('');
  const [number, setNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [fontsLoaded] = useFonts({
    HammersmithOne_400Regular,
  });

  const navigateToNext = async () => {
    try {
      const response = await fetch('http://192.168.197.178:3000/donorRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shopName,
          ownerName,
          category,
          indexNumber,
          number,
          emailId,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigation.navigate('donorreg2', {
          donorData: {
            shopName,
            ownerName,
            category,
            indexNumber,
            number,
            emailId,
          },
        });
      } else {
        const errorData = await response.json();
        console.error(errorData);
        Alert.alert('Registration Failed', `Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'Error occurred. Please try again.');
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={bgjh} style={{ height: '100%', width: '100%' }}>
      <StyledView className='pt-40'>
        <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='text-3xl text-center font-semibold'>
          Donor details
        </StyledText>
        <StyledView className='mx-10'>
          <StyledTextInput
            style={{ fontFamily: 'HammersmithOne_400Regular' }}
            className='border-2 border-red-400 rounded-md p-2 mt-6'
            keyboardType='default'
            placeholder='Shop Name'
            value={shopName}
            onChangeText={(text) => setShopName(text)}
          />
          <StyledTextInput
            style={{ fontFamily: 'HammersmithOne_400Regular' }}
            className='border-2 border-red-400 rounded-md p-2 mt-6'
            keyboardType='default'
            placeholder='Owner Name'
            value={ownerName}
            onChangeText={(text) => setOwnerName(text)}
          />
          <StyledView className='border-2 border-red-400 rounded-md mt-6'>
            <RNPickerSelect
              style={{ fontFamily: 'HammersmithOne_400Regular' }}
              placeholder={{ label: 'Select Category', color: 'red', value: null }}
              items={Category}
              onValueChange={(value) => setCategory(value)}
            />
          </StyledView>
          <StyledView className=' flex flex-row'>
            <StyledTextInput
              style={{ fontFamily: 'HammersmithOne_400Regular' }}
              className='border-2 flex-3 border-red-400 rounded-md p-2 pr-3 mt-6'
              keyboardType='default'
              placeholder='+91'
              value={indexNumber}
              onChangeText={(text) => setIndexNumber(text)}
            />
            <StyledTextInput
              style={{ fontFamily: 'HammersmithOne_400Regular' }}
              className='border-2 border-red-400 rounded-md p-2 ml-6 flex-1 mt-6'
              keyboardType='number-pad'
              placeholder='Mobile Number'
              value={number}
              onChangeText={(text) => setNumber(text)}
            />
          </StyledView>
          <StyledTextInput
            style={{ fontFamily: 'HammersmithOne_400Regular' }}
            className='border-2 border-red-400 rounded-md p-2 mt-6'
            keyboardType='email-address'
            placeholder='Email Id'
            value={emailId}
            onChangeText={(text) => setEmailId(text)}
          />
          <StyledView className='pt-6'>
            <TouchableOpacity
              style={{
                borderRadius: 28,
                backgroundColor: '#f87171',
                borderWidth: 1,
                borderColor: '#f87171',
                padding: 8,
                alignItems: 'center',
                marginHorizontal: 96,
                marginTop: 10,
              }}
              onPress={navigateToNext}
            >
              <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='text-2xl text-white'>
                Next
              </StyledText>
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default DonorDetails1;
