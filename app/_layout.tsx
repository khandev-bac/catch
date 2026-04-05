import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
export default function RootLayout() {
  const [fonts] = useFonts({
    "sans-Regular": require("../assets/fonts/GoogleSans-Regular.ttf"),
    "sans-Medium": require("../assets/fonts/GoogleSans-Medium.ttf"),
    "sans-SemiBold": require("../assets/fonts/GoogleSans-SemiBold.ttf"),
    "sans-Bold": require("../assets/fonts/GoogleSans-Bold.ttf"),
  });
  useEffect(() => {
    if (fonts) {
      SplashScreen.hideAsync();
    }
  }, [fonts]);
  return <Stack screenOptions={{ headerShown: false }} />;
}
