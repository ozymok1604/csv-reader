import { View, Text, StyleSheet } from "react-native";

const Row = ({ row }: { row: any }) => {
  return (
    <View style={styles.row}>
      {row?.map(({ value, error }: any) => (
        <View style={{ ...styles.cell, backgroundColor: error && "#eb7373" }}>
          <Text style={styles.text}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 16 },

  row: {
    display: "flex",
    width: "90%",

    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: "5%",
    alignItems: "center",
  },
  cell: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 5,

    width: 120,
    height: 80,
    borderColor: "black",
    borderWidth: 2,
  },
});

export { Row };
