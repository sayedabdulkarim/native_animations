import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
      <Text onPress={() => navigation.goBack()} style={styles.goBack}>
        GO BACK
      </Text>
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
});
