import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text className="text-4xl text-blue-600">Edit app/index.tsx to edit this screen.</Text>
      <Image
        source={require('../assets/images/icon.png')}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
      <Link className="text-3xl text-white" href={'/(auth)/sign-up'}>
        Sign Up
      </Link>
    </View>
  );
}
