import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
      }}
    >
      <Text   className="text-blue-600 text-4xl">Edit app/index.tsx to edit this screen.</Text>
      <Image source={require("../assets/images/icon.png")}
      style={{ width: 200, height: 200, borderRadius: 20}}
      />
    </View>
  );
}
