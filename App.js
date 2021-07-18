import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world Hi How are you guys</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
});

export default App;
