import { View, Text } from "react-native";
import React, { FC, ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import clsx from "clsx";
interface MainI {
  className?: string;
  children?: ReactNode;
}
const Main: FC<MainI> = ({ className, children }) => {
  return (
    <SafeAreaView className={clsx(" bg-white py-6 px-6", className)}>
      {children}
    </SafeAreaView>
  );
};

export default Main;
