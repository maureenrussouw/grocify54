import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SignOutButton } from '@/components/sign-out-button';

const MainScreen = () => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Link href={'/sign-up'}>Sign Up</Link>
      <Link href={'/(auth)/sign-in'}>Sign In</Link>
      <SignOutButton />
    </View>
  );
};

export default MainScreen;
