import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Table } from "./src/Components/Table";
import { DataContext } from "./src/context";
import { useState } from "react";
import { ImportButton } from "./src/Components/ImportButton";

export default function App() {
  const [fileData, setFileData] = useState<any>("");
  return (
    <DataContext.Provider value={{ fileData, setFileData }}>
      <View style={styles.container}>
        <ImportButton />
        <Table />
        <StatusBar style="auto" />
      </View>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
});
