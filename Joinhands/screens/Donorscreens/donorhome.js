import { styled } from 'nativewind';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts, HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
import Icon from 'react-native-vector-icons/FontAwesome';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Donorhome = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { emailId } = route.params || {};
    const navigate = useNavigation();
    const [fontsLoaded] = useFonts({
        HammersmithOne_400Regular,
    });
    const [clickedIcon, setClickedIcon] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        fetchUserDetails(emailId);
    }, []);

    const handleIconClick = (iconName) => {
        setClickedIcon(iconName);
        if (iconName === 'user') {
            fetchUserDetails(emailId);
        }
    };

    const fetchUserDetails = async (emailId) => {
        try {
            const response = await fetch('http://192.168.36.178:3000/user/details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emailId }),
            });
            if (response.ok) {
                const data = await response.json();
                setUserDetails(data);
            } else {
                console.error('Failed to fetch user details:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user details:', error.message);
        }
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView className='h-full'>
            <StyledView className='items-center'>
                <StyledText className='text-red-400 text-3xl pt-12 pb-5' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Joinhands</StyledText>
            </StyledView>
            <StyledView className='items-center bg-red-400 pb-3 mx-7 rounded-3xl' style={{ elevation: 10 }}>
                {clickedIcon !== 'user' && (
                    <StyledView className='flex flex-row gap-10 pt-10'>
                        <StyledView className='items-center'>
                            <StyledText className='text-5xl text-white'>0</StyledText>
                            <StyledText className='text-sm font-semibold text-white' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Task Completed</StyledText>
                        </StyledView>
                        <StyledView className='items-center'>
                            <StyledText className='text-5xl text-white'>0</StyledText>
                            <StyledText className='text-sm font-semibold text-white' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Served People</StyledText>
                        </StyledView>
                    </StyledView>
                )}
            </StyledView>
            <StyledView className='bg-white pt-1 absolute bottom-0 w-screen rounded-md' style={{ elevation: 10 }}>
                <StyledView className='flex flex-row justify-around'>
                    <Icon
                        name="home"
                        size={50}
                        color={clickedIcon === 'home' ? '#4285F4' : '#f87171'}
                        onPress={() => handleIconClick('home')}
                    />
                    <Icon
                        name="plus"
                        size={45}
                        color={clickedIcon === 'plus' ? '#4285F4' : '#f87171'}
                        onPress={() => handleIconClick('plus')}
                    />
                    <Icon
                        name="user"
                        size={50}
                        color={clickedIcon === 'user' ? '#4285F4' : '#f87171'}
                        onPress={() => handleIconClick('user')}
                    />
                </StyledView>
            </StyledView>

            {clickedIcon === 'user' && userDetails && (
                <StyledView className='mt-4 bg-[#f87171] rounded-xl p-8 mx-2 shadow-md'>
                    <StyledText className='text-lg font-semibold mb-2 text-gray-800'>User Details:</StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Name:</StyledText > {userDetails.ownerName}
                    </StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Email:</StyledText> {userDetails.emailId}
                    </StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Shop Name:</StyledText> {userDetails.shopName}
                    </StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Phone Number:</StyledText> {userDetails.indexNumber} {userDetails.number}
                    </StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>City:</StyledText> {userDetails.city}
                    </StyledText>
                    <StyledText className='text-base text-gray-700' style={{ fontFamily: 'HammersmithOne_400Regular' }}>
                        <StyledText className='font-semibold' style={{ fontFamily: 'HammersmithOne_400Regular' }}>Pin Code:</StyledText> {userDetails.pinCode}
                    </StyledText>
                </StyledView>
            )}

            {(clickedIcon === 'home' || clickedIcon === 'plus') && (
                <StyledView className='mt-4'>
                    <StyledText>This is the {clickedIcon === 'home' ? 'Home' : 'plus'} screen</StyledText>
                </StyledView>
            )}
        </StyledView>
    );
};

export default Donorhome;