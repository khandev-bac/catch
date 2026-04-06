import Button from "@/components/Button";
import Main from "@/components/main";
import SearchComponent from "@/components/search";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <Main className="flex-1 ">
      <SearchComponent />
    </Main>
  );
}
