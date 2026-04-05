import { TextInput, Pressable } from "react-native";
import React, { FC, useRef } from "react";
import { Search } from "iconoir-react-native";
import * as Haptics from "expo-haptics";
interface SearchI {
  value?: string;
  onChange?: (text: string) => void;
  onSubmit?: (text: string) => void;
  onClear?: () => void;
}
const SearchComponent: FC<SearchI> = ({
  onChange,
  onClear,
  onSubmit,
  value,
}) => {
  const inputRef = useRef<TextInput>(null);

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        inputRef.current?.focus();
      }}
      className="flex-row bg-neutral-100 items-center rounded-full px-6 h-14"
    >
      <Search color={"gray"} width={26} height={26} strokeWidth={3} />
      <TextInput
        value={value}
        onChangeText={onChange}
        onSubmitEditing={() => onSubmit?.(value ?? "")}
        ref={inputRef}
        placeholder="Search"
        placeholderTextColor="gray"
        returnKeyType="search"
        multiline={false}
        scrollEnabled={false}
        className="flex-1 px-3 font-sans-SemiBold text-base"
        style={{
          textAlignVertical: "center",
          paddingVertical: 0,
          paddingTop: 0,
          paddingBottom: 0,
          includeFontPadding: false, // Android only — removes extra font spacing
        }}
      />
    </Pressable>
  );
};

export default SearchComponent;
