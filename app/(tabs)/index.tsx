import Button from "@/components/Button";
import Main from "@/components/main";
import SearchComponent from "@/components/search";
import { Image, Text, View } from "react-native";
import { Search, ArrowRight } from "iconoir-react-native";
export default function Index() {
  return (
    <Main className="flex-1 ">
      <SearchComponent />
      <Button title="Buy" />
      <Button title="Continue" onPress={() => {}} />
      {/*// outline*/}
      <Button title="Cancel" variant="outline" onPress={() => {}} />
      {/*// ghost*/}
      <Button title="Skip" variant="ghost" onPress={() => {}} />
      {/*// sizes*/}
      <Button title="Small" size="sm" />
      <Button title="Large" size="lg" />
      {/*// with icons*/}
      <Button
        title="Search"
        leftIcon={<Search color="white" width={18} height={18} />}
      />
      <Button
        title="Next"
        rightIcon={<ArrowRight color="white" width={18} height={18} />}
      />
      {/*// states*/}
      <Button title="Loading" loading />
      <Button title="Disabled" disabled />
      {/*// full width*/}
      <Button title="Submit" fullWidth size="lg" />
    </Main>
  );
}
