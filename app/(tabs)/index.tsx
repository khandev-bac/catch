import ItemCard from "@/components/ItemCard";
import Main from "@/components/main";
import SearchComponent from "@/components/search";
import { View } from "react-native";
export default function Index() {
  return (
    <Main className="flex-1">
      <SearchComponent />
      <View className="flex-row gap-1 mt-2">
        <ItemCard
          itemImage="https://images.unsplash.com/photo-1775119222921-641a304ef582?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
          itemName="iPhone"
          itemTime="24 min ago"
        />
        <ItemCard
          itemImage="https://images.unsplash.com/photo-1775119222921-641a304ef582?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
          itemName="iPhone"
          itemTime="24 min ago"
        />
        <ItemCard
          itemImage="https://images.unsplash.com/photo-1775119222921-641a304ef582?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
          itemName="iPhone"
          itemTime="24 min ago"
        />
      </View>
    </Main>
  );
}
