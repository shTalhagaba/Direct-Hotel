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
import ModalView from '../../components/RoomModal/RoomModal';
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent';
import moment from 'moment';

const HomeScreen = () => {
  const bottomSheetRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState('Hotels');
  const [location, setLocation] = useState('');
  const [roomModal, setRoomModal] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleDateRangeSelected = (start, end) => {
    setSelectedDateRange({ start, end });
    setIsCalendarVisible(false);
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
          setLocation={setLocation}
        />
        {isCalendarVisible && (
          <CalendarComponent
            onDateRangeSelected={handleDateRangeSelected}
            isModalVisible={isCalendarVisible}
            setIsModalVisible={setIsModalVisible}
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
            title=""
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
        {roomModal && (
          <ModalView
            modalVisible={roomModal}
            onRequestClose={() => setRoomModal(!roomModal)}
          />
        )}
      </View>
    </>
  );
};

export default HomeScreen;
