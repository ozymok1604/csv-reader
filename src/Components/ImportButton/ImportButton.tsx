import { Button } from "react-native";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useUsersImport } from "../../effects/useUsersImport";

const ImportButton = () => {
  const { handleFileUpload } = useUsersImport();
  const inputRef = useRef<HTMLInputElement | null>();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        onChange={handleFileUpload}
        ref={inputRef as any}
        type="file"
        style={{ display: "none" }}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleClick} color={"green"} title="Import users" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
});

export { ImportButton };
