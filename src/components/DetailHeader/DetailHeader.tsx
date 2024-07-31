import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, heightPixel, fontPixel } from '../../services';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define the prop types
interface DetailHeaderProps {
  leftIcon?: ImageSourcePropType;
  leftIconPress?: () => void;
  leftIconStyle?: ViewStyle;
  centerTxt?: string;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({
  leftIcon,
  leftIconPress,
  centerTxt,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Pressable onPress={leftIconPress} style={styles.leftIconContainer}>
        <Ionicons name="chevron-back" size={18} color="#fff" />
      </Pressable>
      <View
        style={{
          width: '76%',
          alignItems: 'center',
        }}
      >
        <Text style={styles.centerTxt}>{centerTxt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: heightPixel(50),
  },
  leftIconContainer: {
    borderRadius: 20,
    padding: 5,
    marginLeft: 10,
    backgroundColor: colors.black40,
  },
  leftIcon: {
    resizeMode: 'contain',
    tintColor: '#000',
  },
  centerTxt: {
    fontSize: fontPixel(20),
    color: colors.white,
    lineHeight: 22,
    fontWeight: '700',
    marginStart: 20,
  },
});

export default DetailHeader;
