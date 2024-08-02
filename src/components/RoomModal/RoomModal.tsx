import React, { useState } from 'react';
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors, appImages } from '../../services';
import Button from '../Button/Button';
import CurrencyModal from '../CurrencyModal/CurrencyModal';
import WheelPickerModal from '../WheelPickerModal/WheelPickerModal';
import {
  childrenAgeList,
} from '../../services/constants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const RoomModal = ({
  modalVisible,
  onRequestClose,
  roomValue,
  setRoomValue,
  adultsValue,
  setAdultsValue,
  childrenValue,
  setChildrenValue,
  childrenAges,
  setChildrenAges,
  selectedCurrency,
  setSelectedCurrency,
}) => {
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

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyModalVisible(false);
  };

  const handleContinue = () => {
    onRequestClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalLine} />
            <View style={styles.modalView2}>
              <Text style={styles.heading}>Select Rooms and Guest Count</Text>
              <QuantitySelector
                label="Rooms"
                icon={<Icon name="bed" size={24} color={colors.black} />}
                value={roomValue}
                setValue={setRoomValue}
                max={adultsValue >= 30 ? 30 : adultsValue}
                min={1}
              />
              <QuantitySelector
                label="Adults"
                icon={<Ionicons name="man" size={24} color={colors.black} />}
                value={adultsValue}
                setValue={setAdultsValue}
                max={30}
                min={1}
                handleAdditionalLogic={(newValue) => {
                  if (roomValue > newValue) {
                    setRoomValue(newValue);
                  }
                  if (childrenValue > newValue) {
                    setChildrenValue(newValue);
                    setChildrenAges(childrenAges.slice(0, newValue));
                  }
                }}
              />
              <QuantitySelector
                label="Children"
                icon={
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome6 name="child" size={20} color={colors.black} />
                    <Text style={{ fontSize: 10, color: colors.grey }}>
                      17 Years or less
                    </Text>
                  </View>
                }
                value={childrenValue}
                setValue={setChildrenValue}
                max={adultsValue}
                min={0}
                onPressPlus={addChild}
                onPressMinus={() => {
                  setChildrenValue(childrenValue - 1);
                  setChildrenAges(childrenAges.slice(0, -1));
                }}
              />
              {childrenAges.map((child, index) => (
                <ChildAgeItem
                  key={child.id}
                  index={index}
                  age={child.age}
                  onRemove={() => removeChild(child.id)}
                />
              ))}
              <CurrencySelector
                selectedCurrency={selectedCurrency}
                onPress={() => setIsCurrencyModalVisible(true)}
              />
              <Text style={[styles.heading, { paddingVertical: 20 }]}>
                {roomValue} Rooms - {adultsValue} Adults - {childrenValue}{' '}
                Children
              </Text>
            </View>
            <Button
              btnTitle={'CONTINUE'}
              containerStyle={{ marginBottom: 20, marginTop: 0 }}
              onPress={handleContinue}
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

const QuantitySelector = ({
  label,
  icon,
  value,
  setValue,
  max,
  min,
  handleAdditionalLogic,
  onPressPlus,
  onPressMinus,
}) => (
  <View style={[styles.itemContainer, { marginTop: 10 }]}>
    <View style={{ flexDirection: 'row' }}>
      {icon}
      <Text style={styles.itemTxt}>{label}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        disabled={value === min}
        onPress={() => {
          setValue(value - 1);
          if (handleAdditionalLogic) handleAdditionalLogic(value - 1);
          if (onPressMinus) onPressMinus();
        }}
        style={value === min ? styles.minusContainer : styles.plusContainer}
      >
        <Text style={value === min ? styles.minusTxt : styles.plusTxt}>-</Text>
      </TouchableOpacity>
      <Text style={[styles.desTxt, { marginHorizontal: 14 }]}>{value}</Text>
      <TouchableOpacity
        disabled={value >= max}
        onPress={() => {
          setValue(value + 1);
          if (handleAdditionalLogic) handleAdditionalLogic(value + 1);
          if (onPressPlus) onPressPlus();
        }}
        style={value >= max ? styles.minusContainer : styles.plusContainer}
      >
        <Text style={value >= max ? styles.minusTxt : styles.plusTxt}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ChildAgeItem = ({ index, age, onRemove }) => (
  <View key={index} style={styles.childContainer}>
    <Text style={styles.childText}>Child {index + 1}</Text>
    <View style={{ flexDirection: 'row' }}>
      <Text style={[styles.childText, { marginRight: 20 }]}>{age}</Text>
      <TouchableOpacity style={styles.crossContainer} onPress={onRemove}>
        <Icon name="close" size={15} color={colors.primary} />
      </TouchableOpacity>
    </View>
  </View>
);

const CurrencySelector = ({ selectedCurrency, onPress }) => (
  <View style={styles.itemContainer}>
    <View style={{ flexDirection: 'row', marginStart: 5, alignItems: 'center' }}>
      <Fontisto name="money-symbol" size={16} color={colors.black} />
      <Text style={[styles.itemTxt, { marginLeft: 9 }]}>Currency</Text>
    </View>
    <TouchableOpacity style={styles.currencyContainer} onPress={onPress}>
      <Image source={appImages.hotels} style={styles.icon} />
      <Text style={[styles.currencyText, { paddingHorizontal: 10 }]}>
        {selectedCurrency}
      </Text>
      <Icon name="arrow-drop-down" size={24} color={colors.primaryBlack} />
    </TouchableOpacity>
  </View>
);

export default RoomModal;
