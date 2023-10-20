import { useContext } from "react";
import { DataContext } from "../../context";
import { StyleSheet, View, Text } from "react-native";
import { Row } from "../Row";

const Table = () => {
  const { fileData } = useContext<any>(DataContext);
  const headerColumns =
    fileData?.[0] && fileData != "Error"
      ? [...fileData[0]?.map((item: any) => item?.key)]
      : [" "];

  if (!fileData.length) {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Please choose a file, to import users</Text>
      </View>
    );
  }
  if (fileData == "Error") {
    return (
      <View style={styles.message}>
        <Text style={styles.text}>File format is not correct!</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.header}>
        {headerColumns?.map((title: string) => (
          <View style={styles.columnTitle}>
            <Text style={styles.text}>{title}</Text>
          </View>
        ))}
      </View>
      {fileData != "Error" && (
        <View style={styles.rows}>
          {fileData?.map((row: any) => (
            <Row row={row} />
          ))}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  message: {
    backgroundColor: "#eb7373",
    borderColor: "red",
    borderWidth: 2,
    display: "flex",
    width: "40%",
    height: 150,
    marginTop: 20,

    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "30%",
    alignItems: "center",
  },
  header: {
    display: "flex",
    width: "90%",
    marginTop: 20,

    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "5%",
    alignItems: "center",
  },
  columnTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#73b7eb",
    width: 120,
    height: 80,
    borderColor: "black",
    borderWidth: 2,
  },
  text: { fontSize: 16 },
  rows: {
    display: "flex",
    flexDirection: "column",
  },
});

export { Table };
