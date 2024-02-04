import { styled } from 'nativewind';
import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Alert } from 'react-native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signin = ({ navigation }) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const handleNextPress = async () => {
    if (emailId.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('http://192.168.197.178:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailId, password }),
        });

        if (response.ok) {
          const responseData = await response.json();

          // Check if the response contains an ngo object with emailId property
          if (responseData.ngo && responseData.ngo.emailId) {
            // Navigate to the 'Base' screen or wherever you want to go next
            navigation.navigate('Base');
            console.log('Login Successful');
          } else {
            // Handle the case where the response doesn't contain a valid ngo object
            Alert.alert('Login Failed', 'Invalid response from the server.');
          }
        } else {
          const errorData = await response.json();
          Alert.alert('Login Failed', `Error: ${errorData.error}`);
        }

      } catch (error) {
        console.error('Error:', error.message);
        Alert.alert('Error', 'Error occurred. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please enter both emailId ID and Password');
    }
  };



  return (
    <ImageBackground source={bgjh} style={{ width: '100%', height: '100%' }}>
      <StyledView className='h-full pt-52'>
        <StyledText className='text-3xl pl-10 text-black'>Signin to Joinhands</StyledText>

        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-16'
          keyboardType="email-address"
          placeholder='Enter mail Id'
          value={emailId}
          onChangeText={(text) => setEmailId(text)}
        />

        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-10 mb-7'
          secureTextEntry
          placeholder='Enter Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          onPress={handleNextPress}
          style={{
            backgroundColor: '#f87171',
            borderRadius: 28,
            borderWidth: 1,
            borderColor: '#fca5a5',
            padding: 8,
            alignItems: 'center',
            marginHorizontal: 44,
            marginTop: 20
          }}
        >
          <StyledText className='text-xl text-white'>Next</StyledText>
        </TouchableOpacity>

        <StyledText className='pt-16 pl-20'>Don't have an account ?{' '}
          <TouchableOpacity onPress={() => (navigation.navigate('signup'))}>
            <StyledText className='text-red-600'>Sign Up</StyledText>
          </TouchableOpacity>
        </StyledText>
      </StyledView>
    </ImageBackground>
  );
};

export default Signin;
