import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function RootLayout() {
  const [queryClient] = useState(() => new QueryClient()); // ✅ create once

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
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
      );
    </QueryClientProvider>
  );
}
