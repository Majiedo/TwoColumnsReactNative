import { StyleSheet, Text } from "react-native";
import React from "react";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

const List = ({ item }) => {
  return (
    <Animated.View
      style={styles.Box}
      entering={FadeInDown.springify()}
      exiting={FadeOutUp.springify()}
    >
      <Text>{item.num}</Text>
    </Animated.View>
  );
};

export default React.memo(List, (curr, next) => curr.index === next.index);

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    height: 150,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
