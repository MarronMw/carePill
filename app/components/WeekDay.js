import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/Colors";
import AppText from "./AppText";
import AppIcon from "./AppIcon";

function WeekDay({ checkedColor = "#c26714", isChecked = true }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isChecked ? colors.gold : colors.blue,
        },
      ]}
    >
      <AppText
        title={"M"}
        titleStyles={[
          styles.title,
          { color: isChecked ? checkedColor : "#fff" },
        ]}
      />
      {isChecked && (
        <AppIcon name="sticker-check-outline" size={30} color={checkedColor} />
      )}
      {!isChecked && (
        <AppIcon name="sticker-minus-outline" size={30} color={colors.white} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#c26714",
  },
});

export default WeekDay;
