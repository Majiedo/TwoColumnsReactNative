import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Animated, { Layout } from "react-native-reanimated";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

export default function App() {
  const [columns, setColumns] = useState(false);
  const [data, setData] = useState([{ num: 1, id: uuidv4() }]);

  const ToggleColumns = () => {
    setColumns(!columns);
  };

  const addData = () => {
    const item = {
      num: data.length + 1,
      id: uuidv4(),
    };
    setData([...data, item]);
  };

  const deleteData = () => {
    setData([...data.slice(1)]);
  };
  return (
    <View style={styles.container}>
      <Animated.FlatList
        key={columns ? "oneRow" : "twoRow"}
        data={data}
        numColumns={columns ? 1 : 2}
        showsVerticalScrollIndicator={false}
        itemLayoutAnimation={Layout}
        keyExtractor={(item) => item.id}
        style={styles.containerFlatList}
        renderItem={({ item, index }) => <List key={index} item={item} />}
      />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={addData}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Add More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToggleColumns}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Toggle Columns
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteData}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Remove One</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "15%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFlatList: {
    width: "90%",
  },
  buttonsWrapper: {
    backgroundColor: "#262322",
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
