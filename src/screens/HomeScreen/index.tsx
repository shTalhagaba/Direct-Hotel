import React, { useRef, useState } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
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
import { RootState } from '../../store'; // Adjust this import based on your project setup

type TabName = 'Visas' | 'Hotels' | 'Schools';

interface DateRange {
  start: moment.Moment | null;
  end: moment.Moment | null;
}

const HomeScreen: React.FC = () => {
  const bottomSheetRef = useRef<RBSheet>(null);
  const dispatch = useDispatch();
  const recentSearchList = useSelector(
    (state: RootState) => state.search.recentSearchList,
  );
  const [selectedTab, setSelectedTab] = useState<TabName>('Hotels');
  const [location, setLocation] = useState<string>('');
  const [roomModal, setRoomModal] = useState<boolean>(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [roomValue, setRoomValue] = useState<number>(1);
  const [adultsValue, setAdultsValue] = useState<number>(2);
  const [childrenValue, setChildrenValue] = useState<number>(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('SAR');

  const navigation = useNavigation();

  const handleDateRangeSelected = (
    start: moment.Moment,
    end: moment.Moment,
  ) => {
    setSelectedDateRange({ start, end });
    setIsCalendarVisible(false);
    setRoomModal(true);
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleTabPress = (tabName: TabName) => {
    setSelectedTab(tabName);
  };

  const handleSetLocation = (item: { title: string }) => {
    setLocation(item?.title);
    const updatedList = [...recentSearchList, item];
    dispatch(handleRecentSearchList(updatedList));
    setIsCalendarVisible(true);
  };

  const handleSearchPress = () => {
    if (!location) {
      Alert.alert('Error', 'Please select a location');
      return;
    }
    if (!selectedDateRange.start || !selectedDateRange.end) {
      Alert.alert('Error', 'Please select your dates');
      return;
    }
    if (!roomValue || !adultsValue) {
      Alert.alert('Error', 'Please specify room and adults count');
      return;
    }
    Alert.alert('Success', 'All inputs are valid');
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
              onPress={() => handleTabPress(tabName as TabName)}
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
            onDropdownPress={openBottomSheet}
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
            onDropdownPress={() => setIsCalendarVisible(true)}
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
          onPress={handleSearchPress}
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
              .fill('')
              .map((_, index) => (
                <View style={styles.imageContainer} key={index}>
                  <Image
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
