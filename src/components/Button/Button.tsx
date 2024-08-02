import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { colors, heightPixel, widthPixel } from '../../services';

// Define the prop types
interface ButtonProps {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  btnTitle: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  containerStyle,
  titleStyle,
  btnTitle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text allowFontScaling={false} style={[styles.title, titleStyle]}>
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '94%',
    height: heightPixel(48),
    marginTop: heightPixel(20),
    backgroundColor: colors.primary,
    borderRadius: widthPixel(10),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '600',
    color: colors.white,
    fontSize: widthPixel(19),
  },
});

export default Button;
