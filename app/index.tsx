import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Link } from 'expo-router';
import { SignOutButton } from '@/components/sign-out-button';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MainScreen</Text>
        <Link style={styles.link} href={'/sign-up'}>
          Sign Up
        </Link>
        <Link style={styles.link} href={'/(auth)/sign-in'}>
          Sign In
        </Link>
        <SignOutButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});

export default MainScreen;
