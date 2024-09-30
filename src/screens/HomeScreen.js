import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";
import "../App.css";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Bell, Search } from "lucide-react-native";

function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/avatar.png")}
            style={{ height: hp(5), weight: hp(5.5) }}
          ></Image>
          <Bell size={hp(4)} color="gray" />
        </View>

        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello Avijit
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600 "
            >
              Make your Own food
            </Text>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600 "
            >
              use your{" "}
              <Text className="text-amber-400">Available Ingredient</Text>
            </Text>

            <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
              <TextInput
                placeholder="Search any recipe"
                placeholderTextColor={"gray"}
                className="flex-1 text-base mb-1 pl-3 tracking-wider"
                style={{ fontSize: hp(1.7) }}
              ></TextInput>
              <View className="bg-white rounded-full p-3">
                <Search size={hp(2.5)} strokeWidth={3} color="gray" />
              </View>
            </View>

            <View>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
