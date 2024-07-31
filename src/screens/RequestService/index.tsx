import React, { useState } from 'react';
import { View, ScrollView, StatusBar, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { appImages, colors, routes } from '../../services';
import styles from './styles';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Button from '../../components/Button/Button';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import RequestServiceModal from '../../components/RequestServiceModal/RequestServiceModal';

interface RequestServiceScreenProps {
  route: RouteProp<{ params: { item: Item } }, 'params'>;
}

interface Item {
  title: string;
  price: string;
  rating: number;
  distance?: string;
  category?: string;
  currency?: string;
}

const RequestServiceScreen: React.FC<RequestServiceScreenProps> = ({
  route,
}) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to generate stars based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={12}
          color="#000"
          style={styles.starIcon}
        />,
      );
    }
    return stars;
  };

  const services = {
    id: 1,
    title: item?.title || 'Test Title',
    distance: item?.distance || '6km',
    price: item?.price || '129',
    currency: item?.currency || '$',
    rating: item?.rating || 4.0,
    category: item?.category || 'Nanny',
    cardNumber: '1234-5678-9876-5432',
    cardName: 'Gabriella S. Wilson',
    cardType: 'master',
    totalPrice: '129',
    date: '2024-07-30',
    duration: '8 hours',
  };

  const addToRequestServices = async (service: typeof services) => {
    try {
   
    } catch (error) {
      console.error('Error adding service: ', error);
      alert('Failed to add service. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.primaryWhite}
      />
      <DetailHeader
        leftIcon={appImages.arrowRight}
        leftIconPress={() => navigation.goBack()}
        centerTxt={'Request Service'}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', marginHorizontal: 14 }}>
            <Image source={appImages.itemImage} style={styles.image} />
            <View style={styles.infoContainer}>
              <View style={styles.infoInnerContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.location}>San Francisco, California</Text>
              <View style={styles.ratingContainer}>
                {renderStars(item.rating)}
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.rating}>{' . 12 reviews'}</Text>
              </View>
              <Text style={styles.price}>
                {item.currency}
                {item.price}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.row}>
            <Text style={styles.date}>Date</Text>
            <Text style={styles.edit}>Edit</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.duration}>Mon, July 29</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.date}>Duration</Text>
            <Text style={styles.edit}>Edit</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.duration}>9:00 AM - 14:00 PM</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.row2}>
            <CustomCheckbox isChecked={true} />
            <View style={{width:'80%',flexDirection:'row'}}>
            <Image source={appImages.master} style={styles.imageMaster} />
            <Text style={styles.cardNumber}>**** **** **** 1234</Text>
            </View>
            <Text style={styles.edit}>Edit</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.totalSection}>
          <Text style={styles.totalTitle}>Your Total</Text>
          <View style={[styles.row, { marginTop: 35 }]}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.totalPrice}>
              {item?.currency}
              {item?.price}
            </Text>
          </View>
          <View style={styles.separator1} />
        </View>
      </ScrollView>
      <Button
        btnTitle={'Request Service'}
        containerStyle={{ marginBottom: 30 }}
        onPress={() => setModalVisible(true)}
      />
      <RequestServiceModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={() => addToRequestServices(services)}
      />
    </View>
  );
};

export default RequestServiceScreen;
