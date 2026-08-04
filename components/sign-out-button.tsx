import { ThemedText } from '@/components/themed-text';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      router.replace('/');
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={handleSignOut}
    >
      <ThemedText type="defaultSemiBold" style={styles.buttonText}>
        Sign out
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    alignSelf: 'flex-start',
    minWidth: 140,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
  },
});
