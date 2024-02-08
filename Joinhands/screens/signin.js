import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, TextInput, View, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import bgjh from "../assets/bgjh.png";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCredentials } from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Signin = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Retrieve saved credentials from Redux store
  const savedCredentials = useSelector(state => state.credentials);

  useEffect(() => {
    // If saved credentials exist, attempt automatic sign-in
    if (savedCredentials && savedCredentials.emailId && savedCredentials.password) {
      attemptAutoSignIn(savedCredentials);
    }
  }, []);

  const attemptAutoSignIn = async (credentials) => {
    try {
      const response = await fetch('http://192.168.197.178:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log('Automatic Sign-in Successful');
        const responseData = await response.json();

        // Navigate to different screens based on where the email was found
        if (responseData.foundIn === 'ngo') {
          navigation.navigate('ngohome');
        } else if (responseData.foundIn === 'donor') {
          navigation.navigate('donorhome');
        } else {
          setError('Invalid user type');
        }
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error during automatic sign-in:', error.message);
    }
  };

  const handleNextPress = async () => {
    if (emailId.trim() !== '' && password.trim() !== '') {
      try {
        const response = await fetch('http://192.168.36.178:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailId, password }),
        });

        if (response.ok) {
          console.log('Login Successful');
          const responseData = await response.json();

          // Store the credentials in local storage using Redux
          dispatch(setUserCredentials({ emailId, password, foundIn: responseData.foundIn }));

          // Clear input fields
          setEmailId('');
          setPassword('');

          // Navigate to different screens based on where the email was found
          if (responseData.foundIn === 'ngo') {
            navigation.navigate('ngohome', { emailId: emailId });
          } else if (responseData.foundIn === 'donor') {
            navigation.navigate('donorhome', { emailId: emailId });
          } else {
            setError('Invalid user type');
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
