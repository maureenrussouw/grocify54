import { useAuth } from '@clerk/expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainScreen = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)/sign-in');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MainScreen</Text>
        <Link className="pb-6 pt-6 text-4xl" href={'/sign-up'}>
          Sign Up
        </Link>
        <Link className="pb-6 pt-6 text-4xl" href={'/(auth)/sign-in'}>
          Sign In
        </Link>
        <Pressable onPress={handleSignOut} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
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
  logoutButton: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#111827',
    alignSelf: 'flex-start',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MainScreen;
