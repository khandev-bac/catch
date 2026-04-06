import { View, Text, Image } from "react-native";
import React, { FC } from "react";
interface ItemCardI {
  itemImage?: string;
  itemName?: string;
  itemTime?: string;
}
const ItemCard: FC<ItemCardI> = ({ itemImage, itemName, itemTime }) => {
  return (
    <View className="flex-col px-3 py-3 rounded-lg  self-start">
      {itemImage && (
        <Image source={{ uri: itemImage }} className="w-32 h-32 rounded-xl" />
      )}
      <View>
        {itemName && (
          <Text className="text-lg font-sans-Medium">{itemName}</Text>
        )}
        {itemTime && (
          <Text className="text-neutral-400 font-sans-Regular text-xs">
            {itemTime}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ItemCard;
