import React, { useRef, useState } from 'react';
import { View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import styles from './styles';
import { appImages, colors } from '../../services';
import Button from '../../components/Button/Button';
import Feather from 'react-native-vector-icons/Feather';
import CustomInputCard from '../../components/CustomInputCard/CustomInputCard';
import SearchBottomSheet from '../../components/SearchBottomSheet/SearchBottomSheet';
import RoomModal from '../../components/RoomModal/RoomModal';
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { handleRecentSearchList } from '../../store/Actions/searchAction';

const HomeScreen = () => {
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const recentSearchList = useSelector(
    (state) => state.search.recentSearchList,
  );
  const [selectedTab, setSelectedTab] = useState('Hotels');
  const [location, setLocation] = useState('');
  const [roomModal, setRoomModal] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roomValue, setRoomValue] = useState(1);
  const [adultsValue, setAdultsValue] = useState(2);
  const [childrenValue, setChildrenValue] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('SAR');

  const navigation = useNavigation();

  const handleDateRangeSelected = (start, end) => {
    setSelectedDateRange({ start, end });
    setIsCalendarVisible(false);
    setRoomModal(true);
  };

  const openBottomSheet = () => {
    bottomSheetRef?.current?.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef?.current?.close();
  };

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };
  
  const handleSetLocation = (item) => {
    setLocation(item?.title);
    let list = [...recentSearchList];
    list.push(item);
    dispatch(handleRecentSearchList(list));
    setIsCalendarVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.primary}
        />
        <DetailHeader
          leftIcon={appImages.arrowRight}
          leftIconPress={() => navigation.goBack()}
          centerTxt={'Direct'}
        />
        <SearchBottomSheet
          bottomSheetRef={bottomSheetRef}
          closeBottomSheet={closeBottomSheet}
          setLocation={handleSetLocation}
          recentSearchList={recentSearchList}
        />
        {isCalendarVisible && (
          <CalendarComponent
            onDateRangeSelected={handleDateRangeSelected}
            isModalVisible={isCalendarVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
        {roomModal && (
          <RoomModal
            modalVisible={roomModal}
            onRequestClose={() => setRoomModal(!roomModal)}
            roomValue={roomValue}
            setRoomValue={setRoomValue}
            adultsValue={adultsValue}
            setAdultsValue={setAdultsValue}
            childrenValue={childrenValue}
            setChildrenValue={setChildrenValue}
            childrenAges={childrenAges}
            setChildrenAges={setChildrenAges}
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
        )}

        <View style={styles.tabsContainer}>
          {['Visas', 'Hotels', 'Schools'].map((tabName) => (
            <TouchableOpacity
              key={tabName}
              style={[
                styles.tab,
                selectedTab === tabName && styles.selectedTab,
              ]}
              onPress={() => handleTabPress(tabName)}
            >
              {selectedTab === tabName && <View style={styles.overlayLayer} />}
              <Image
                source={
                  tabName === 'Visas'
                    ? appImages.visa
                    : tabName === 'Hotels'
                    ? appImages.hotels
                    : tabName === 'Schools'
                    ? appImages.course
                    : appImages.visa
                }
                style={styles.tabIcon}
              />
              <Text style={styles.tabTitle}>{tabName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ marginTop: 50 }}>
          <CustomInputCard
            icon={'location'}
            title={location ? location : ''}
            placeholder="Where are you going?"
            onDropdownPress={() => {
              openBottomSheet();
            }}
          />
          <CustomInputCard
            icon={'dates'}
            title={
              selectedDateRange?.start && selectedDateRange?.end
                ? moment(selectedDateRange?.start).format('DD MMM YYYY') +
                  ' - ' +
                  moment(selectedDateRange?.end).format('DD MMM YYYY')
                : ''
            }
            placeholder="Select your dates"
            onDropdownPress={() => {
              setIsCalendarVisible(true);
            }}
          />
          <CustomInputCard
            icon={'person'}
            title={
              adultsValue +
              ' Adults - ' +
              (childrenValue > 0 ? childrenValue : 'Without') +
              ' Children - ' +
              (roomValue <= 1 ? roomValue + ' Room' : roomValue + ' Rooms')
            }
            placeholder="Enter something..."
            onDropdownPress={() => setRoomModal(true)}
          />
        </View>
        <Button
          btnTitle={'Search'}
          containerStyle={{ marginBottom: 30 }}
          onPress={() => null}
        />

        <View style={styles.bottomBlock}>
          <Text style={styles.boldText}>Why Direct?</Text>
          <View style={styles.cardContainer}>
            <Feather name="credit-card" size={24} color={colors.primary} />
            <Text style={styles.cardText}>Multiple Payment options</Text>
          </View>
          <Text style={styles.partnershipText}>In partnership with</Text>
          <View style={styles.partnersContainer}>
            {Array(4)
              .fill()
              .map((_, index) => (
                <View style={styles.imageContainer}>
                  <Image
                    key={index}
                    source={appImages.course} // Replace with actual partner images
                    style={styles.partnerImage}
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
