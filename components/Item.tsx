import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Data } from "@/data/data";

type Props = {
  index: number;
  item: Data;
  height: number;
  width: number;
  marginHorizontal: number;
};

const Item = ({ index, item, width, height, marginHorizontal }: Props) => {
  return (
    <View style={[styles.container, { width, height, marginHorizontal }]}>
      <View style={styles.imageContainer}>
        <Image
          source={item?.image}
          style={[styles.image, { width }]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{item?.name}</Text>
          <Text style={styles.textExp}>{item?.exp}</Text>
        </View>
        <View style={styles.visaContainer}>
          <Image source={item?.visa} style={styles.visa} resizeMode="contain" />
        </View>
      </View>
      <Image source={require("@/assets/images/chip.png")} style={styles.chip} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    transformOrigin: "bottom",
    overflow: "hidden",
  },
  imageContainer: { flex: 4 },
  image: { flex: 1 },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textName: {
    color: "#111111",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  textExp: {
    color: "#111111",
    fontSize: 16,
  },
  visaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  visa: {
    width: 58,
  },
  chip: {
    position: "absolute",
    transform: [{ scale: 0.4 }, { rotateZ: "90deg" }],
    right: -40,
    top: 20,
  },
});
