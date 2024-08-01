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
import {
  childrenAgeList,
  heightPixel,
  widthPixel,
} from '../../services/constants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const RoomModal = (props) => {
  const navigation = useNavigation();
  const [roomValue, setRoomValue] = useState(1);
  const [adultsValue, setAdultsValue] = useState(2);
  const [childrenValue, setChildrenValue] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('SAR');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [isCurrencyModalVisible, setIsCurrencyModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('1 year old');

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
    openModal();
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
                    disabled={roomValue === 1}
                    onPress={() => setRoomValue(roomValue - 1)}
                    style={
                      roomValue === 1
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={roomValue === 1 ? styles.minusTxt : styles.plusTxt}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={[styles.desTxt, { marginHorizontal: 14 }]}>
                    {roomValue}
                  </Text>
                  <TouchableOpacity
                    disabled={roomValue >= adultsValue || roomValue >= 30}
                    onPress={() => setRoomValue(roomValue + 1)}
                    style={
                      roomValue >= adultsValue || roomValue >= 30
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={
                        roomValue >= adultsValue || roomValue >= 30
                          ? styles.minusTxt
                          : styles.plusTxt
                      }
                    >
                      +
                    </Text>
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
                    disabled={adultsValue === 1}
                    onPress={() => {
                      setAdultsValue(adultsValue - 1);
                      if (roomValue > adultsValue - 1) {
                        setRoomValue(adultsValue - 1);
                      }
                      if (childrenValue > adultsValue - 1) {
                        setChildrenValue(adultsValue - 1);
                        setChildrenAges(childrenAges.slice(0, adultsValue - 1));
                      }
                    }}
                    style={
                      adultsValue === 1
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={
                        adultsValue === 1 ? styles.minusTxt : styles.plusTxt
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
                    disabled={adultsValue >= 30}
                    onPress={() => setAdultsValue(adultsValue + 1)}
                    style={
                      adultsValue >= 30
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
                  >
                    <Text
                      style={
                        adultsValue >= 30 ? styles.minusTxt : styles.plusTxt
                      }
                    >
                      +
                    </Text>
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
                    disabled={childrenValue >= adultsValue}
                    onPress={() => addChild()}
                    style={
                      childrenValue >= adultsValue
                        ? styles.minusContainer
                        : styles.plusContainer
                    }
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
        options={childrenAgeList}
        selectedValue={selectedValue}
        onConfirm={handleConfirm}
        isVisible={isModalVisible}
        onClose={closeModal}
      />
    </View>
  );
};

export default RoomModal;
