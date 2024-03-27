import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@/store';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

// Define the type for the navigation prop specific to this screen
type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const About: React.FC<HomeProps> = ({navigation}) => {
  const {userInfo, isAuthenticated, name, weatherDetails} = useSelector(
    (state: RootState) => state.authReducer,
  );
  return (
    <ImageBackground
      // source={require('./path-to-your-image.jpg')} // replace with your image path
      source={{
        // uri: 'https://w0.peakpx.com/wallpaper/584/502/HD-wallpaper-water-drops-drops-water-thumbnail.jpg',
        // uri: 'https://w.forfun.com/fetch/21/21560acd12b597e9f2914e7b98a7975a.jpeg',
        uri: 'https://img.freepik.com/premium-photo/macro-water-droplets-pale-blue-background-mobile-wallpaper-nature-photography_1011623-40.jpg',
      }}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentView}>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text style={styles.text}>About</Text>
          <Text
            style={styles.text}
            onPress={() =>
              console.log({
                userInfo,
                isAuthenticated,
                name,
                weatherDetails,
              })
            }>
            Aboutttt
          </Text>
          <Text style={styles.text} onPress={() => navigation.goBack()}>
            GO BACK
          </Text>
          {/* ... other components */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover', // or 'stretch'
  },
  contentView: {
    // your content styles
  },
  text: {
    // your text styles
  },
});
