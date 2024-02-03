import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { ImageBackground } from 'react-native';
import bgjh from '../assets/bgjh.png';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleNextPress = () => {
    if (username.trim() !== '') {
      navigation.navigate('signup_pass');
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
          keyboardType="default"
          placeholder='Phone, email or username'
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <StyledView className='pt-14'>
          <TouchableOpacity
            onPress={handleNextPress}
            style={{
              backgroundColor: username.trim() !== '' ? '#f87171' : '#ccc',
              borderRadius: 28,
              borderWidth: 1,
              borderColor: '#fca5a5',
              padding: 8,
              alignItems: 'center',
              marginHorizontal: 30,
              marginTop: 20
            }}
            disabled={username.trim() === ''}
          >
            <StyledText className='text-xl text-white'>Next</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default Signup;