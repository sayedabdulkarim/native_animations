import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import CustomCarouselOne from "@/components/CustomCarouselOne";

type RootStackParamList = {
  Home: undefined;
  Reanimate: undefined;
};

// Define the type for the navigation prop specific to this screen
type ReanimateScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Reanimate"
>;

interface ReanimateProps {
  navigation: ReanimateScreenNavigationProp;
}

const Reanimate: React.FC<ReanimateProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomCarouselOne />
      {/* <Text onPress={() => navigation.goBack()} style={styles.goBack}>
        GO BACK
      </Text> */}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>GO BACK</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Reanimate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", // custom color one
  },
  goBack: {
    color: "white",
  },
  button: {
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 18,
    borderRadius: 10,
  },
  text: {
    color: "#111111",
    textAlign: "center",
    fontSize: 18,
  },
});
