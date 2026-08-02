import { useAuth } from '@clerk/expo';
import { SignInButton, UserButton, SignUpButton } from '@clerk/expo/web';
import { ActivityIndicator, View } from 'react-native';

export default function MainScreen() {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });

  if (!isLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )}
    </View>
  );
}
