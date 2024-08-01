import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { colors, appImages } from '../../services';
const { height, width } = Dimensions.get('screen');

const currencies = ['SAR', 'USD', 'AED', 'EUR', 'GBP'];

const CurrencyModal = ({
  isCurrencyModalVisible,
  setIsCurrencyModalVisible,
  selectCurrency,
}) => {
  const renderCurrencyItem = ({ item }) => (
    <TouchableOpacity
      style={styles.currencyItem}
      onPress={() => selectCurrency(item)}
    >
      <View style={styles.currencyContent}>
        <Text style={styles.currencyText}>{item}</Text>
        <Image source={appImages.hotels} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCurrencyModalVisible}
        onRequestClose={() => setIsCurrencyModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.currencyModalView}>
            <View style={styles.modalLine} />
            <Text style={styles.currencyHeading}>Currency</Text>
            <FlatList
              data={currencies}
              renderItem={renderCurrencyItem}
              keyExtractor={(item) => item}
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
    alignItems: 'center',
  },
  currencyModalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 1,
    alignItems: 'center',
    height: '30%',
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
  currencyItem: {
    paddingTop: 7,
    width: width,
  },
  currencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    width: width,
    paddingBottom: 7,
  },
  currencyText: {
    fontSize: 16,
    marginRight: 45, // space between text and icon
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default CurrencyModal;
