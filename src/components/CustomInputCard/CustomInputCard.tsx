import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Replace with the icon library you're using
import { colors, heightPixel, widthPixel } from '../../services';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInputCard = ({ icon, title, placeholder, onDropdownPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onDropdownPress}>
      <View style={styles.iconContainer}>
        {icon === 'location' ? (
          <Entypo name={icon} size={18} color={colors.primary} />
        ) : icon === 'dates' ? (
          <Entypo name={'calendar'} size={17} color={colors.primary} />
        ) : (
          <Ionicons name={'person'} size={17} color={colors.primary} />
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
        <Icon name="arrow-drop-down" size={24} color={colors.grey} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(46),
  },
  iconContainer: {
    alignItems: 'center',
  },
  topIcon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    color: colors.pureBlack,
  },
  placeholder: {
    fontSize: 13,
    color: colors.grey,
  },
  dropdownContainer: {
    paddingLeft: 4,
    paddingTop: 1,
  },
});

export default CustomInputCard;
