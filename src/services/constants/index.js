import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const storageKey = {};

export const routes = {
  // auth
  splash: "splash",
  bottomTab: "bottomTab",
  home: "home",
  myRequests: "myRequests",
  visaRequired: "visaRequired",
  more: "more",
  exploreDetails: "exploreDetails",
  requestService: "requestService",


};

export const wp = (p) => width * (p / 100);
export const hp = (p) => height * (p / 100);

export { WINDOW_HEIGHT, WINDOW_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH };

const widthBaseScale = SCREEN_WIDTH / 430;
const heightBaseScale = SCREEN_HEIGHT / 932;

function normalize(size, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const widthPixel = (size) => {
  return normalize(size, "width");
};
const heightPixel = (size) => {
  return normalize(size, "height");
};
const fontPixel = (size) => {
  return heightPixel(size);
};

export { widthPixel, heightPixel, fontPixel };
