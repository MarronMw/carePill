import React from "react";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { StyleSheet } from "react-native";
import colors from "../config/Colors";
import AppText from "../components/AppText";
import WeekDay from "../components/WeekDay";

function HomeScreen(props) {
  const leadingWords = "your health is your wealth";
  return (
    <Screen style={styles.container}>
      {/* <AppButton title={"Today, 20th"} style={styles.btn} isClickable={false} />
      <AppText title={leadingWords} titleStyles={styles.leading} /> */}
      <WeekDay />
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.screenBg,
  },
  leading: {
    fontSize: 35,
    fontWeight: "800",
    textAlign: "center",
  },
});

export default HomeScreen;
