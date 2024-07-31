import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { colors, routes } from '../../services';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchServicesList = async () => {
      try {

      } catch (error) {
        console.error('Error fetching services list from Firestore:', error);
      }
    };

    fetchServicesList();

    const timer = setTimeout(() => {
      navigation.navigate(routes.bottomTab);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primaryWhite}
      />
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
