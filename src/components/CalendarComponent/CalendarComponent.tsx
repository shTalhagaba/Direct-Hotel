import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { colors, heightPixel, widthPixel } from '../../services';
import Button from '../Button/Button';

// Define the prop types
interface CalendarComponentProps {
  onDateRangeSelected: (startDate: string, endDate: string) => void;
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  onDateRangeSelected,
  isModalVisible,
  setIsModalVisible,
}) => {
  const today = moment().format('YYYY-MM-DD');
  const maxDate = moment().add(1, 'year').format('YYYY-MM-DD');
  const [selectedDates, setSelectedDates] = useState<{ [key: string]: any }>({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const onDayPress = (day: any) => {
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

  const getMarkedDates = (start: string, end: string) => {
    let dates: { [key: string]: any } = {};
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
            horizontal={false}
            pagingEnabled={true}
            pastScrollRange={0}
            futureScrollRange={12}
          />
          {startDate && endDate ? (
            <View style={styles.detailsWrapper}>
              <View style={styles.detailsContainer}>
                <Text style={styles.dateText}>
                  {`${startDate} - ${endDate} ( ${getNightCount()} nights )`}
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
    backgroundColor: colors.black50,
  },
  modalContent: {
    width: '100%',
    height: '90%',
    backgroundColor: colors.white,
    borderTopLeftRadius: widthPixel(20),
    borderTopRightRadius: widthPixel(20),
    paddingVertical: heightPixel(20),
  },
  detailsWrapper: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    height: heightPixel(120),
    width: '100%',
  },
  detailsContainer: {
    marginVertical: heightPixel(1),
    alignItems: 'center',
  },
  dateText: {
    fontSize: widthPixel(16),
    marginTop: heightPixel(15),
    fontWeight: '700',
    color: colors.black,
  },
  header: {
    fontSize: widthPixel(15),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: heightPixel(10),
    color: colors.black,
  },
});

export default CalendarComponent;
