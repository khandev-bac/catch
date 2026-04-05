import { View, Text } from "react-native";
import React from "react";
import Main from "@/components/main";

const Favorites = () => {
  return (
    <Main className="flex-1">
      <View className="flex-row">
        <Text className="font-sans-Bold text-3xl">Favorites</Text>
      </View>
    </Main>
  );
};

export default Favorites;
