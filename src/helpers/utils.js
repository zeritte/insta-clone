import { Platform } from "react-native";

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";
export const platformName = Platform.OS;
export const platformVersion = Platform.Version;
