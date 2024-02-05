import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { ImageBackground } from 'react-native';
import bgjh from '../assets/bgjh.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signup = ({ navigation }) => {
  const [emailId, setEmailId] = useState('');

  const handleNextPress = async () => {
    try {
      const response = await fetch('http://192.168.197.178:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId }),
      });

      if (response.ok) {
        console.log('User email registered successfully');
        navigation.navigate('signup_pass', { emailId: emailId });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error occurred. Please try again.');
    }
  };

  return (
    <ImageBackground source={bgjh} style={{ width: '100%', height: '100%' }}>
      <StyledView className='h-full'>
        <StyledText className='text-black font-semibold text-3xl pt-60 pl-14'>
          Sign up to
        </StyledText>
        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-24'
          keyboardType="email-address"
          placeholder='Enter email'
          value={emailId}
          onChangeText={(text) => setEmailId(text)}
        />
        <StyledView className='pt-14'>
          <TouchableOpacity
            onPress={handleNextPress}
            style={{
              backgroundColor: emailId.trim() !== '' ? '#f87171' : '#ccc',
              borderRadius: 28,
              borderWidth: 1,
              borderColor: '#fca5a5',
              padding: 8,
              alignItems: 'center',
              marginHorizontal: 30,
              marginTop: 20
            }}
            disabled={emailId.trim() === ''}
          >
            <StyledText className='text-xl text-white'>Next</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default Signup;