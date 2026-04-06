import { View, Text, Pressable } from "react-native";
import React, { FC, ReactNode } from "react";
interface CardI {
  icon?: ReactNode;
  mainText?: string;
  lowText?: string;
  endIcon?: ReactNode;
}
const Cards: FC<CardI> = ({ icon, lowText, mainText, endIcon }) => {
  return (
    <Pressable className="flex-row px-3 py-6 rounded-lg items-center bg-white shadow-lg">
      {icon}
      <View className="flex-col mx-3">
        {mainText && (
          <Text className="text-lg font-sans-Medium">{mainText}</Text>
        )}
        {lowText && (
          <Text className="text-xs text-neutral-400 font-sans-Regular">
            {lowText}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default Cards;
