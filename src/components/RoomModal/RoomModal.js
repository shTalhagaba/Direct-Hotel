import React, { useState } from 'react';
import {
  Alert,
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
import { heightPixel, widthPixel } from '../../services/constants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RequestModal = (props) => {
  const navigation = useNavigation();
  const [roomValue, setRoomValue] = useState(0);
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);

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
            <Text style={styles.heading}>Select Rooms and Guest Count</Text>
            <View style={[styles.itemContainer, { marginTop: 10 }]}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="bed" size={24} color={colors.black} />
                <Text style={styles.itemTxt}>Rooms</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  disabled={roomValue === 0 ? true : false}
                  onPress={() => setRoomValue(roomValue - 1)}
                  style={
                    roomValue === 0
                      ? styles.minusContainer
                      : styles.plusContainer
                  }
                >
                  <Text
                    key={roomValue}
                    style={roomValue === 0 ? styles.minusTxt : styles.plusTxt}
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
                  disabled={adultsValue === 0 ? true : false}
                  onPress={() => setAdultsValue(adultsValue - 1)}
                  style={styles.minusContainer}
                >
                  <Text style={styles.minusTxt}>-</Text>
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
                <Text style={[styles.itemTxt, { marginLeft: 8 }]}>
                  Children{' '}
                  <Text style={{ fontSize: 10, color: colors.grey }}>
                    17 Years or less
                  </Text>
                </Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  disabled={childrenValue === 0 ? true : false}
                  onPress={() => setChildrenValue(childrenValue - 1)}
                  style={styles.minusContainer}
                >
                  <Text style={styles.minusTxt}>-</Text>
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
                  onPress={() => setChildrenValue(childrenValue + 1)}
                  style={styles.plusContainer}
                >
                  <Text style={styles.plusTxt}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Fontisto name="money-symbol" size={18} color={colors.black} />
                <Text style={[styles.itemTxt, { marginLeft: 5 }]}>
                  Currency
                </Text>
              </View>
              <View style={styles.currencyContainer}>
                <Image source={appImages.hotels} style={styles.icon} />
                <Text style={[styles.currencyText, { paddingHorizontal: 10 }]}>
                  SAR
                </Text>
                <Icon name="arrow-drop-down" size={24} color={colors.primaryBlack} />
              </View>
            </View>
            <Text style={[styles.heading, { paddingVertical: 20 }]}>
              {roomValue} Rooms - {adultsValue} Adults - {childrenValue}{' '}
              Children{' '}
            </Text>
            <Button
              btnTitle={'CONTINUE'}
              containerStyle={{ marginBottom: 20, marginTop: 0 }}
              onPress={props.onRequestClose}
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
  modalView: {
    width: '100%',
    backgroundColor: colors.primaryWhite,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: 'auto',
    paddingVertical: 40,
    paddingHorizontal: 20,
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
    borderBottomWidth: 1,
  },

  itemTxt: {
    fontSize: 16,
    color: '#1A1A1A',
    marginStart: 4,
    textAlign: 'center',
  },
  quantityContainer: {
    marginStart: 10,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 16,
    color: colors.primaryWhite,
    fontWeight: '500',
  },
  minusTxt: {
    fontSize: 16,
    color: 'lightGrey',
    fontWeight: '500',
  },
  desTxt: {
    fontSize: 16,
    color: colors.primaryBlack,
    fontWeight: '500',
  },
  btnContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  currencyText: {
    fontSize: 13,
    color: colors.primaryBlack,
    fontWeight: '700',
  }
});

export default RequestModal;
