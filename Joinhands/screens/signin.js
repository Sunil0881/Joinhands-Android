import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View, Alert, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import bgjh from "../assets/bgjh.png";
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signin = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleNextPress = async () => {
    if (emailId.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('http://192.168.37.144:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailId, password }),
        });

        if (response.ok) {
          console.log('Login Successful');
          const responseData = await response.json();

          // Check if the response contains a valid user object with emailId property
          if (responseData.user) {
            navigation.navigate('Base', { user: responseData.user });
          } else {
            setError('Invalid user data');
          }
        } else {
          const errorData = await response.json();
          setError(`Error: ${errorData.error}`);
        }

      } catch (error) {
        console.error('Error:', error.message);
        setError('Error occurred. Please try again.');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  return (
    <ImageBackground source={bgjh} style={{ width: '100%', height: '100%' }}>
      <StyledView className='h-full pt-52'>
        <StyledText className='text-3xl pl-10 text-black'>Signin to Joinhands</StyledText>

        <StyledTextInput
          className='border-2 border-red-400 rounded-md p-2 mx-10 mt-16'
          keyboardType="email-address"
          placeholder='Enter email'
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

        <StyledText className='pt-16 pl-20'>
          Don't have an account ?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Role')}>
            <StyledText className='text-red-600'>Sign Up</StyledText>
          </TouchableOpacity>
        </StyledText>

        {/* Error Pop-up */}
        {error && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                maxWidth: 300,
                alignItems: 'center',
              }}
            >
              <StyledText className='text-red-600'>{error}</StyledText>
              <TouchableOpacity onPress={closeErrorPopup}>
                <StyledText className='text-blue-500 mt-2'>Close</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </StyledView>
    </ImageBackground>
  );
};

export default Signin;
