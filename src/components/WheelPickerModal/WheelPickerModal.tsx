import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Dimensions } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import { colors, appImages } from '../../services';
import Button from '../Button/Button';

const { height, width } = Dimensions.get('screen');

const WheelPickerModal = ({
  options,
  selectedValue,
  onConfirm,
  isVisible,
  onClose,
}) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  const handleConfirm = () => {
    onConfirm(currentValue);
    onClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        visible={isVisible}
        onBackdropPress={onClose}
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
  },
  currencyModalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    // height: '30%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 7,
  },
  modalLine: {
    width: 40,
    height: 4,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  currencyHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  picker: {
    backgroundColor: 'white',
    width: width * 0.92,
    height: height/5,
  },
});

export default WheelPickerModal;
