import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { data } from "@/data/data";
import Item from "./Item";
import Animated from "react-native-reanimated";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const CustomCarouselOne = () => {
  const { width } = useWindowDimensions();
  const x = useSharedValue(0);
  const ITEM_WIDTH = 250;
  const ITEM_HEIGHT = 400;
  const MARGIN_HORIZONTAL = 20;
  const ITEM_FULL_WIDTH = ITEM_WIDTH + MARGIN_HORIZONTAL * 2;
  const SPACER = (width - ITEM_FULL_WIDTH) / 2;

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      // console.log({ x });
      x.value = event.contentOffset.x;
    },
  });

  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Choose a style that perfectly</Text>
        <Text style={styles.text}>reflects your true self </Text>
      </View>
      <Animated.FlatList
        onScroll={onScroll}
        ListHeaderComponent={<View />}
        ListFooterComponentStyle={{ width: SPACER }}
        ListFooterComponent={<View />}
        ListHeaderComponentStyle={{ width: SPACER }}
        data={data}
        keyExtractor={(item) => item.id + item.name}
        renderItem={({ item, index }) => {
          return (
            <Item
              item={item}
              index={index}
              height={ITEM_HEIGHT}
              width={ITEM_WIDTH}
              marginHorizontal={MARGIN_HORIZONTAL}
              x={x}
              fullWidth={ITEM_FULL_WIDTH}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        snapToInterval={ITEM_FULL_WIDTH}
      />
    </>
  );
};

export default CustomCarouselOne;

const styles = StyleSheet.create({
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
  },
});
