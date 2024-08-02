import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ListRenderItem,
} from 'react-native';
import { colors, appImages, heightPixel, widthPixel } from '../../services';
import { currencies, SCREEN_WIDTH } from '../../services/constants/index';

// Define the prop types
interface CurrencyModalProps {
  isCurrencyModalVisible: boolean;
  setIsCurrencyModalVisible: (visible: boolean) => void;
  selectCurrency: (currency: string) => void;
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({
  isCurrencyModalVisible,
  setIsCurrencyModalVisible,
  selectCurrency,
}) => {
  const renderCurrencyItem: ListRenderItem<string> = ({ item }) => (
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
    backgroundColor: colors.white,
    borderRadius: widthPixel(10),
    paddingVertical: heightPixel(1),
    alignItems: 'center',
    height: '30%',
  },
  modalLine: {
    width: widthPixel(40),
    height: heightPixel(4),
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: widthPixel(10),
    marginBottom: heightPixel(10),
  },
  currencyHeading: {
    fontSize: widthPixel(18),
    fontWeight: 'bold',
    marginBottom: heightPixel(10),
    color: colors.black,
  },
  currencyItem: {
    paddingTop: heightPixel(7),
    width: SCREEN_WIDTH,
  },
  currencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    width: SCREEN_WIDTH,
    paddingBottom: heightPixel(7),
  },
  currencyText: {
    fontSize: widthPixel(16),
    marginRight: widthPixel(45), // space between text and icon
  },
  icon: {
    height: heightPixel(20),
    width: widthPixel(20),
  },
});

export default CurrencyModal;
