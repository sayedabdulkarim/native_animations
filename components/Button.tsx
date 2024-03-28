import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
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
