// DonorDetails2.js
import React, { useState } from 'react';
import { styled } from 'nativewind';
import { Text, TouchableOpacity, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png";
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const DonorDetails2 = ({ route }) => {
  const navigation = useNavigation();
  const { donorData } = route.params || {};
  const [Address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [document, setDocument] = useState('');
  const [fontsLoaded] = useFonts({
    HammersmithOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const submitDetails = async () => {
    try {
      const donorDetails = { ...donorData, Address, pinCode, city, document };
      const response = await fetch('http://192.168.36.178:3000/updateDonorDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donorDetails),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        // Handle success, you can navigate to the next screen or perform other actions
        navigation.navigate('signup');
      } else {
        // Handle the case where the server response is not successful
        console.log('Response Status:', response.status);
        console.error('Server response not OK');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <ImageBackground source={bgjh} style={{ height: '100%', width: '100%' }}>
      <StyledView className='pt-40 m-10'>
        <StyledTextInput
          style={{ fontFamily: 'HammersmithOne_400Regular' }}
          className='border-2 border-red-400 rounded-md pb-4 p-2 mt-6'
          keyboardType='default'
          placeholder='Address'
          value={Address}
          onChangeText={(text) => setAddress(text)}
        />
        <StyledTextInput
          style={{ fontFamily: 'HammersmithOne_400Regular' }}
          className='border-2 border-red-400 rounded-md p-2 mt-6'
          keyboardType='default'
          placeholder='Pin Code'
          value={pinCode}
          onChangeText={(text) => setPinCode(text)}
        />
        <StyledTextInput
          style={{ fontFamily: 'HammersmithOne_400Regular' }}
          className='border-2 border-red-400 rounded-md p-2 mt-6'
          keyboardType='default'
          placeholder='City'
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <StyledTextInput
          style={{ fontFamily: 'HammersmithOne_400Regular' }}
          className='border-2 border-red-400 rounded-md p-2 mt-6'
          keyboardType='default'
          placeholder='Document'
          value={document}
          onChangeText={(text) => setDocument(text)}
        />

        <StyledView className='pt-8'>
          <TouchableOpacity
            style={{
              borderRadius: 28,
              backgroundColor: '#f87171',
              borderWidth: 1,
              borderColor: '#f87171',
              padding: 8,
              alignItems: 'center',
              marginHorizontal: 80,
              marginTop: 10,
            }}
            onPress={submitDetails}
          >
            <StyledText style={{ fontFamily: 'HammersmithOne_400Regular' }} className='text-2xl text-white'>
              Submit
            </StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default DonorDetails2;
