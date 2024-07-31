import React from 'react';
import { StyleSheet, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import { colors } from '../../services';

// Define the prop types
interface CustomCheckboxProps {
  isChecked: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <View style={styles.outerCircle}>
        <View
          style={[styles.innerCircle, isChecked && styles.checkedInnerCircle]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginRight: 10,
    padding: 5,
  },
  outerCircle: {
    width: 22,
    height: 22,
    borderRadius: 12, // Outer circle (border)
    borderWidth: 2, // Border width
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 8, // Inner circle
    backgroundColor: 'transparent', // Default background for unchecked state
  },
  checkedInnerCircle: {
    backgroundColor: colors.primary, // Filled color when checked
  },
});

export default CustomCheckbox;
