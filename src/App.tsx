import React from "react";
import { SafeAreaView, Text, View,FlatList, StyleSheet } from "react-native";
import music_data from "./music-data.json";

function App () {
  return  (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>MUSİC APP</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex:1},
});