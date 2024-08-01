import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { colors } from '../../services';
import Button from '../Button/Button';

const CalendarComponent = ({
  onDateRangeSelected,
  isModalVisible,
  setIsModalVisible,
}) => {
  const today = moment().format('YYYY-MM-DD');
  const maxDate = moment().add(1, 'year').format('YYYY-MM-DD');

  const [selectedDates, setSelectedDates] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onDayPress = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day.dateString);
      setEndDate(null);
      setSelectedDates({
        [day.dateString]: {
          startingDay: true,
          color: colors.primary,
          textColor: 'white',
        },
      });
    } else {
      setEndDate(day.dateString);
      const dates = getMarkedDates(startDate, day.dateString);
      setSelectedDates(dates);
    }
  };

  const getMarkedDates = (start, end) => {
    let dates = {};
    let currentDate = moment(start);
    const lastDate = moment(end);

    while (currentDate <= lastDate) {
      const dateStr = currentDate.format('YYYY-MM-DD');
      dates[dateStr] = {
        color:
          dateStr === start || dateStr === end ? colors.primary : '#FFCB97',
        textColor: dateStr === start || dateStr === end ? 'white' : 'black',
        startingDay: currentDate.isSame(start),
        endingDay: currentDate.isSame(end),
      };
      currentDate = currentDate.add(1, 'day');
    }
    return dates;
  };

  const getNightCount = () => {
    if (startDate && endDate) {
      const start = moment(startDate);
      const end = moment(endDate);
      return end.diff(start, 'days');
    }
    return 0;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.header}>Select your dates</Text>
          <CalendarList
            onDayPress={onDayPress}
            markingType={'period'}
            markedDates={selectedDates}
            minDate={today}
            maxDate={maxDate}
            theme={calendarTheme}
            horizontal={false} // Stack months vertically
            pagingEnabled={true}
            pastScrollRange={0} // Disable scrolling back to previous months
            futureScrollRange={12} // Allow scrolling forward 12 months
          />
          {startDate && endDate ? (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'white',
                height: 120,
                width: '100%',
              }}
            >
              <View style={styles.detailsContainer}>
                <Text style={styles.dateText}>
                  {startDate +
                    ' - ' +
                    endDate +
                    ' ( ' +
                    getNightCount() +
                    ' nights ) '}
                </Text>
                <Button
                  btnTitle={'Confirm'}
                  onPress={() => {
                    onDateRangeSelected(startDate, endDate);
                    setIsModalVisible(false);
                  }}
                />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const calendarTheme = {
  backgroundColor: 'white',
  calendarBackground: 'white',
  textSectionTitleColor: 'gray',
  selectedDayBackgroundColor: colors.primary,
  selectedDayTextColor: 'red',
  todayTextColor: colors.primary,
  dayTextColor: 'black',
  textDisabledColor: 'gray',
  dotColor: colors.primary,
  selectedDotColor: 'white',
  arrowColor: colors.primary,
  monthTextColor: 'black',
  indicatorColor: colors.primary,
  textDayFontWeight: '300',
  textMonthFontWeight: '500',
  textDayHeaderFontWeight: '500',
  textDayFontSize: 15,
  textMonthFontSize: 14,
  textDayHeaderFontSize: 12,
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background with transparency
  },
  modalContent: {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    // justifyContent: 'space-between', // Add this line
  },
  detailsContainer: {
    marginVertical: 1,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    marginTop: 15,
    fontWeight:'700',
    color: colors.black,
  },
  nightCount: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: colors.black,
  },
});

export default CalendarComponent;
