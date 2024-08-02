import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, heightPixel, widthPixel } from '../../services';

interface CustomInputCardProps {
  icon: 'location' | 'dates' | 'person';
  title?: string;
  placeholder: string;
  onDropdownPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomInputCard: React.FC<CustomInputCardProps> = ({
  icon,
  title,
  placeholder,
  onDropdownPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, style]}
      onPress={onDropdownPress}
    >
      <View style={styles.iconContainer}>
        {icon === 'location' ? (
          <Entypo name={icon} size={widthPixel(18)} color={colors.primary} />
        ) : icon === 'dates' ? (
          <Entypo
            name={'calendar'}
            size={widthPixel(17)}
            color={colors.primary}
          />
        ) : (
          <Ionicons
            name={'person'}
            size={widthPixel(17)}
            color={colors.primary}
          />
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text style={title ? styles.title : styles.placeholder}>
          {title || placeholder}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={onDropdownPress}
      >
        <Icon
          name="arrow-drop-down"
          size={widthPixel(24)}
          color={colors.grey}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: widthPixel(10),
    backgroundColor: colors.white,
    shadowColor: colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: widthPixel(4),
    elevation: 3,
    padding: widthPixel(8),
    marginVertical: heightPixel(5),
    marginHorizontal: widthPixel(14),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.whiteBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(46),
  },
  iconContainer: {
    alignItems: 'center',
  },
  topIcon: {
    width: widthPixel(24),
    height: heightPixel(24),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: widthPixel(10),
  },
  title: {
    fontSize: widthPixel(14),
    color: colors.pureBlack,
  },
  placeholder: {
    fontSize: widthPixel(13),
    color: colors.grey,
  },
  dropdownContainer: {
    paddingLeft: widthPixel(4),
    paddingTop: heightPixel(1),
  },
});

export default CustomInputCard;
