import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import styles from './styles';
import { appImages, colors } from '../../services';
import Button from '../../components/Button/Button';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Hotels');
  const navigation = useNavigation();

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <DetailHeader
        leftIcon={appImages.arrowRight}
        leftIconPress={() => navigation.goBack()}
        centerTxt={'Direct'}
      />

      <View style={styles.tabsContainer}>
        {['Visas', 'Hotels', 'Schools'].map((tabName) => (
          <TouchableOpacity
            key={tabName}
            style={[styles.tab, selectedTab === tabName && styles.selectedTab]}
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
      <Button
        btnTitle={'Search'}
        containerStyle={{ marginBottom: 30 }}
        onPress={() => null}
      />
    </View>
  );
};

export default HomeScreen;
