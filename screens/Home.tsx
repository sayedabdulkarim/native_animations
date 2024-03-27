import React, { useState, useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScaledSize,
} from "react-native";
import { getFontFamily } from "../assets/fonts/helper";
import { horizontalScale, scaleFontSize } from "../utils/scaling";
import { NavigationProp } from "@react-navigation/native";

interface ScreenData {
  width: number;
  height: number;
}

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

// Define the type for the navigation prop specific to this screen
type HomeScreenNavigationProp = NavigationProp<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [screenData, setScreenData] = useState<ScreenData>(
    Dimensions.get("screen")
  );

  useEffect(() => {
    // let subscription: EmitterSubscription;

    const onChange = ({
      screen,
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) => {
      setScreenData(screen);
    };

    const subscription = Dimensions.addEventListener("change", onChange);

    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={[
            styles.test,
            { height: screenData.height / 2, width: screenData.width / 2 },
          ]}
        >
          {/* <Text style={styles.text}>Hello worlds</Text> */}
          <Text style={styles.text}>111111</Text>
          <Text style={styles.text2}> 11</Text>
        </View>

        <Text style={styles.text}>Hello worlddddxxx</Text>
        <Text style={styles.text2}>Hello world 22</Text>
        {/* <Text onPress={() => navigation.navigate(Routes.About)}>About</Text> */}
        <Text
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          Abouttt
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Static styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  test: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  text: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily("Inter", "800"), // Assuming this function returns a string
    fontWeight: "bold",
    marginLeft: horizontalScale(20),
  },
  text2: {
    fontSize: 20,
    fontFamily: getFontFamily("Inter", "800"), // Assuming this function returns a string
    fontWeight: "bold",
  },
});

export default Home;
