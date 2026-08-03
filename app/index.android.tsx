import { useAuth } from '@clerk/expo';
import { AuthView, UserButton } from '@clerk/expo/native';
import { useState } from 'react';
import { ActivityIndicator, Button, Modal, Platform, View } from 'react-native';

export default function MainScreen() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  if (!isLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isSignedIn ? <UserButton /> : <Button title="Sign up" onPress={() => setIsAuthOpen(true)} />}
      <Modal
        animationType="slide"
        visible={isAuthOpen}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsAuthOpen(false)}
      >
        <AuthView onDismiss={() => setIsAuthOpen(false)} />
      </Modal>
    </View>
  );
}
