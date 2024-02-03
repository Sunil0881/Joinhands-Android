import { styled } from 'nativewind';
import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View} from 'react-native';
import { ImageBackground } from 'react-native';
import bgjh from "../assets/bgjh.png"

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNextPress = () => {
    // Check if email and password are not empty before navigating
    if (email.trim() !== '' && password.trim() !== '') {
      navigation.navigate('signup');
    }
    else{
        alert("Please enter both Email ID and Password");
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
          value={email}
          onChangeText={(text) => setEmail(text)}
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
}

export default Signin;
