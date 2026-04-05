import { View, Text } from "react-native";
import React from "react";
import Main from "@/components/main";
import { MoreVert } from "iconoir-react-native";
const Settings = () => {
  return (
    <Main className="flex-1">
      <View className="flex-row justify-between">
        <Text className="font-sans-Bold text-3xl">Settings</Text>
        <MoreVert color={"black"} width={20} height={20} strokeWidth={4} />
      </View>
    </Main>
  );
};

export default Settings;
