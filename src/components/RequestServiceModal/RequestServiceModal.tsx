import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Modal from 'react-native-modal';
import { appImages, colors, heightPixel, widthPixel } from '../../services';
import Button from '../Button/Button';

interface RequestServiceModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RequestServiceModal: React.FC<RequestServiceModalProps> = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image source={appImages.close} style={styles.imageMaster} />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>
          Are you sure you want to request service?
        </Text>
        <Text style={styles.modalDescription}>
          Once you confirm, the service request will be finalized and the
          caregiver will be notified.
        </Text>
        <Button
          btnTitle="Confirm Request"
          onPress={onConfirm}
          // containerStyle={styles.confirmButton}
        />
        <Button
          btnTitle="Go Back"
          containerStyle={styles.goBackButton}
          titleStyle={styles.goBackButtonText}
          onPress={onClose}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 8,
    marginBottom: 30,
    borderRadius: 12,
    overflow: 'hidden',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    paddingHorizontal: 8,
    marginRight: 10,
    paddingVertical: 9,
    marginBottom: 20, // Adjusted margin to be consistent with spacing
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.pureBlack,
    marginVertical: 10,
    textAlign: 'left',
    lineHeight: 32,
  },
  modalDescription: {
    fontSize: 16,
    color: colors.pureBlack,
    textAlign: 'left',
    marginVertical: 10,
    lineHeight: 20,
  },
  confirmButton: {
    backgroundColor: colors.orange,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  goBackButton: {
    backgroundColor: colors.white,
    borderColor: colors.pureBlack,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  goBackButtonText: {
    color: colors.pureBlack,
    fontSize: 19,
    fontWeight: '400',
  },
  imageMaster: {
    width: widthPixel(15),
    height: heightPixel(12),
    resizeMode: 'contain', // Ensure image fits well within its container
  },
});

export default RequestServiceModal;
