import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../config/Colors";
import Screen from "../components/Screen";

function SplashScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* Empty View to make the elements 3 */}
      <View />
      <View>
        <LottieView
          autoPlay
          style={styles.lottie}
          speed={1.5}
          source={require("./../assets/lottie/pill.json")}
        />
      </View>
      <View style={styles.text}>
        <Text style={[styles.logoText, { color: colors.green }]}>Care</Text>
        <Text style={[styles.logoText, { color: colors.blue }]}>Pill</Text>
      </View>
    </Screen>
  );
}

StatusBar.setHidden(true, "fade");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
  },
  logoText: {
    fontSize: 50,
    fontWeight: "700",
  },
  lottie: {
    height: 400,
    width: 400,
  },
  text: {
    display: "flex",
    flexDirection: "row",
  },
});

export default SplashScreen;
