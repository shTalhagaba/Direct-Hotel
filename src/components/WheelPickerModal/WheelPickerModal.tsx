import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import { colors, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../services';
import Button from '../Button/Button';

// Define the type for props
interface WheelPickerModalProps {
  options: string[];
  selectedValue: string;
  onConfirm: (value: string) => void;
  isVisible: boolean;
  onClose: () => void;
}

// Functional Component with TypeScript
const WheelPickerModal: React.FC<WheelPickerModalProps> = ({
  options,
  selectedValue,
  onConfirm,
  isVisible,
  onClose,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(selectedValue);

  const handleConfirm = () => {
    onConfirm(currentValue);
    onClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        visible={isVisible}
        onRequestClose={onClose}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.currencyModalView}>
            <View style={styles.modalLine} />
            <Text style={styles.currencyHeading}>Select Child Age</Text>
            <Picker
              style={styles.picker}
              selectedValue={currentValue}
              pickerData={options}
              textSize={22}
              onValueChange={(value) => setCurrentValue(value)}
            />
            <Button
              btnTitle="Confirm"
              onPress={handleConfirm}
              containerStyle={{ marginBottom: 20, marginTop: 0 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  } ,
  currencyModalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 7,
  } ,
  modalLine: {
    width: 40,
    height: 4,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  } ,
  currencyHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  picker: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.92,
    height: SCREEN_HEIGHT / 5,
  } ,
});

export default WheelPickerModal;
