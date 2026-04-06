import { View, Text } from "react-native";
import React from "react";
import Main from "@/components/main";
import { MoreVert } from "iconoir-react-native";
import { setting } from "@/utils/setting";
import Cards from "@/components/Cards";
const Settings = () => {
  return (
    <Main className="flex-1">
      <View className="flex-row justify-between">
        <Text className="font-sans-Bold text-3xl">Settings</Text>
      </View>
      <View className="gap-4 mt-4">
        {setting.map((set) => (
          <Cards
            key={set.mainText}
            icon={<set.icon color={set.color} width={26} height={26} />}
            mainText={set.mainText}
            lowText={set.lowText}
          />
        ))}
      </View>
    </Main>
  );
};

export default Settings;
