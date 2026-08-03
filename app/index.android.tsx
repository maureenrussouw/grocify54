import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SignOutButton } from '@/components/sign-out-button';

const MainScreen = () => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Link className="pb-6 pt-6 text-4xl" href={'/sign-up'}>
        Sign Up
      </Link>
      <Link className="pb-6 pt-6 text-4xl" href={'/(auth)/sign-in'}>
        Sign In
      </Link>
      <SignOutButton />
    </View>
  );
};

export default MainScreen;
