import {Dimensions} from 'react-native';

export function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

export function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}
export const screenWidth = Dimensions.get("window").width;
export const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
// export default {vw,vh}