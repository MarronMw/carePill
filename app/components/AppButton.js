import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/Colors";

function AppButton({ title, style, titleStyles, isClickable = true, onPress }) {
  // Switch between an action button and a simple box
  return isClickable ? (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AppText title={title} titleStyles={titleStyles} />
    </TouchableOpacity>
  ) : (
    <View style={[styles.container, style]}>
      <AppText title={title} titleStyles={titleStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default AppButton;
