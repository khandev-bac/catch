import React from "react";
import { Tabs } from "expo-router";
import { tabs } from "@/utils/tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_BAR_WIDTH = 200;
const TAB_BAR_HEIGHT = 60;
const TAB_BAR_ICON_SIZE = 25;
const RootTabs = () => {
  const inset = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(inset.bottom, 30),
          left: 0,
          right: 0,
          width: TAB_BAR_WIDTH,
          marginHorizontal: (SCREEN_WIDTH - TAB_BAR_WIDTH) / 2,
          height: TAB_BAR_HEIGHT,
          borderRadius: 30,
          backgroundColor: "#291720",
          elevation: 10,
          shadowColor: "#1B1B1E",
          shadowOpacity: 0.25,
          borderTopWidth: 0,
          overflow: "hidden",
        },
        tabBarItemStyle: {
          paddingVertical: TAB_BAR_HEIGHT / 2 - 20,
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            android_ripple={null}
            onPress={(e) => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              props.onPress?.(e);
            }}
          />
        ),
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <tab.icon
                  width={TAB_BAR_ICON_SIZE}
                  height={TAB_BAR_ICON_SIZE}
                  fill="#FF0066"
                  color="#FF0066"
                />
              ) : (
                <tab.icon
                  width={TAB_BAR_ICON_SIZE}
                  height={TAB_BAR_ICON_SIZE}
                  fill="#C2DFE3"
                  color="#C2DFE3"
                />
              ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default RootTabs;
