import useSocialAuth from '@/hooks/useSocialAuth';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  return (
    <SafeAreaView className="bg-primary dark:bg-secondary flex-1">
      {/* decorative elements */}
      <View className="bg-primary/80 dark:bg-background/40 absolute -left-16 top-12 h-56 w-56 rounded-full" />
      <View className="bg-primary/70 dark:bg-background/35 absolute right-[-74px] top-40 h-72 w-72 rounded-full" />
      <View className="px-6 pt-4">
        <Text className="text-primary-foreground dark:text-foreground text-center font-mono text-5xl font-extrabold uppercase tracking-tight">
          Grocify
        </Text>
        <Text className="text-primary-foreground/80 dark:text-foreground/75 mt-1 text-center text-[14px]">
          Plan smarter. Shop happier.
        </Text>
        <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3">
          <Image
            source={require('../../assets/images/auth.png')}
            style={{ width: '100%', height: 300 }}
            contentFit="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
