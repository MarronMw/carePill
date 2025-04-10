import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/Colors";

function AppIcon({ name, size, color }) {
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={name}
        size={size}
        color={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 7,
    padding: 5,
  },
  icon: {
    borderRadius: 30,
  },
});

export default AppIcon;
