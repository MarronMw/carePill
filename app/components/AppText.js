import React from "react";
import { StyleSheet, Text, View } from "react-native";

function AppText({ subTitle, subtitleStyles, title, titleStyles }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
      {subTitle && (
        <Text style={[styles.subtitle, subtitleStyles]}>{subTitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "capitalize",
  },
});

export default AppText;
