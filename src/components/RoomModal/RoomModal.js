import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors, appImages } from '../../services';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button/Button';
import CurrencyModal from '../CurrencyModal/CurrencyModal';
import WheelPickerModal from '../WheelPickerModal/WheelPickerModal';
import { heightPixel, widthPixel } from '../../services/constants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RoomModal = (props) => {
  const navigation = useNavigation();
  const [roomValue, setRoomValue] = useState(0);
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('SAR');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [isCurrencyModalVisible, setIsCurrencyModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('1 year old');

  const options = [
    'Less than 1 year old',
    '1 year old',
    '2 years old',
    '3 years old',
    '4 years old',
    '5 years old',
    '6 years old',
    '7 years old',
    '8 years old',
    '9 years old',
    '10 years old',
    '11 years old',
    '12 years old',
    '13 years old',
    '14 years old',
    '15 years old',
    '16 years old',
    '17 years old',
  ];

  const handleConfirm = (value) => {
    setSelectedValue(value);
    setChildrenAges([...childrenAges, { id: Date.now(), age: value }]);
    setChildrenValue(childrenValue + 1);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addChild = () => {
    openModal()
  };

  const removeChild = (id) => {
    setChildrenAges(childrenAges.filter((child) => child.id !== id));
  };

  const setChildAge = (id, age) => {
    setChildrenAges(
      childrenAges.map((child) =>
        child.id === id ? { ...child, age } : child,
      ),
    );
  };

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalLine} />
            <View style={styles.modalView2}>
              <Text style={styles.heading}>Select Rooms and Guest Count</Text>
              <View style={[styles.itemContainer, { marginTop: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="bed" size={24} color={colors.black} />
                  <Text style={styles.itemTxt}>Rooms</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    disabled={roomValue === 0}
                    onPress={() => setRoomValue(roomValue - 1)}
                    style={
                      roomValue === 0
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={roomValue === 0 ? styles.minusTxt : styles.plusTxt}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={[styles.desTxt, { marginHorizontal: 14 }]}>
                    {roomValue}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setRoomValue(roomValue + 1)}
                    style={styles.plusContainer}
                  >
                    <Text style={styles.plusTxt}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Ionicons name="man" size={24} color={colors.black} />
                  <Text style={styles.itemTxt}>Adults</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    disabled={adultsValue === 0}
                    onPress={() => setAdultsValue(adultsValue - 1)}
                    style={
                      adultsValue === 0
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={
                        adultsValue === 0 ? styles.minusTxt : styles.plusTxt
                      }
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.desTxt,
                      { marginHorizontal: 14, marginTop: 5 },
                    ]}
                  >
                    {adultsValue}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setAdultsValue(adultsValue + 1)}
                    style={styles.plusContainer}
                  >
                    <Text style={styles.plusTxt}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginStart: 5,
                  }}
                >
                  <FontAwesome6 name="child" size={20} color={colors.black} />
                  <Text style={[styles.itemTxt, { marginLeft: 14 }]}>
                    Children{' '}
                    <Text style={{ fontSize: 10, color: colors.grey }}>
                      17 Years or less
                    </Text>
                  </Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    disabled={childrenValue === 0}
                    onPress={() => {
                      setChildrenValue(childrenValue - 1);
                      setChildrenAges(childrenAges.slice(0, -1));
                    }}
                    style={
                      childrenValue === 0
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={
                        childrenValue === 0 ? styles.minusTxt : styles.plusTxt
                      }
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.desTxt,
                      { marginHorizontal: 14, marginTop: 5 },
                    ]}
                  >
                    {childrenValue}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      addChild();
                    }}
                    style={styles.plusContainer}
                  >
                    <Text style={styles.plusTxt}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {childrenAges.map((child, index) => (
                <View key={child.id} style={styles.childContainer}>
                  <Text style={styles.childText}>Child {index + 1}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.childText, { marginRight: 20 }]}>
                      {child?.age}
                    </Text>
                    <TouchableOpacity
                      style={styles.crossContainer}
                      onPress={() => removeChild(child.id)}
                    >
                      <Icon name="close" size={15} color={colors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              <View style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginStart: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Fontisto
                    name="money-symbol"
                    size={16}
                    color={colors.black}
                  />
                  <Text style={[styles.itemTxt, { marginLeft: 9 }]}>
                    Currency
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.currencyContainer}
                  onPress={() => setIsCurrencyModalVisible(true)}
                >
                  <Image source={appImages.hotels} style={styles.icon} />

                  <Text
                    style={[styles.currencyText, { paddingHorizontal: 10 }]}
                  >
                    {selectedCurrency}
                  </Text>
                  <Icon
                    name="arrow-drop-down"
                    size={24}
                    color={colors.primaryBlack}
                  />
                </TouchableOpacity>
              </View>
              <Text style={[styles.heading, { paddingVertical: 20 }]}>
                {roomValue} Rooms - {adultsValue} Adults - {childrenValue}{' '}
                Children
              </Text>
            </View>
            <Button
              btnTitle={'CONTINUE'}
              containerStyle={{ marginBottom: 20, marginTop: 0 }}
              onPress={props.onRequestClose}
            />
          </View>
        </View>
      </Modal>

      {/* Currency Modal */}
      <CurrencyModal
        toggleCurrencyDropdown={toggleCurrencyDropdown}
        selectCurrency={selectCurrency}
        isCurrencyModalVisible={isCurrencyModalVisible}
        setIsCurrencyModalVisible={setIsCurrencyModalVisible}
        selectedCurrency={selectedCurrency}
      />
      <WheelPickerModal
        options={options}
        selectedValue={selectedValue}
        onConfirm={handleConfirm}
        isVisible={isModalVisible}
        onClose={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    backgroundColor: colors.primaryWhite,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingVertical: 7,
  },
  modalView2: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalLine: {
    width: 40,
    height: 4,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    color: colors.primaryBlack,
    fontWeight: '700',
    textAlign: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBlockColor: 'lightgrey',
    borderBottomWidth: 0.4,
  },
  itemTxt: {
    fontSize: 16,
    color: '#1A1A1A',
    marginStart: 4,
    textAlign: 'center',
  },
  quantityContainer: {
    marginStart: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusContainer: {
    backgroundColor: colors.primary,
    width: widthPixel(27),
    height: heightPixel(27),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusContainer: {
    backgroundColor: colors.primaryWhite,
    borderWidth: 1,
    borderColor: colors.primary,
    width: widthPixel(27),
    height: heightPixel(27),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossContainer: {
    backgroundColor: colors.primaryWhite,
    width: widthPixel(27),
    height: heightPixel(27),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyContainer: {
    backgroundColor: colors.primaryWhite,
    borderWidth: 1,
    borderColor: colors.primary,
    height: heightPixel(27),
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  plusTxt: {
    fontSize: 18,
    color: colors.primaryWhite,
    fontWeight: '400',
  },
  minusTxt: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '400',
  },
  desTxt: {
    fontSize: 17,
    color: colors.grey,
    fontWeight: '500',
    textAlign: 'center',
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBlockColor: 'lightgrey',
    borderBottomWidth: 0.5,
  },
  currencyText: {
    fontSize: 13,
    color: colors.primaryBlack,
    fontWeight: '700',
  },
  btnContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  childText: {
    fontSize: 15,
    color: '#1A1A1A',
    marginStart: 4,
  },
});

export default RoomModal;
