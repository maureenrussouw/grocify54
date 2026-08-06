import { useAuth } from '@clerk/expo';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SsoCallbackScreen() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace('/');
    } else {
      router.replace('/(auth)/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <ActivityIndicator size="large" color="#111827" />
      <View className="mt-4 px-6">
        <Text className="text-center text-base font-medium text-foreground">
          Completing sign-in...
        </Text>
      </View>
    </SafeAreaView>
  );
}
