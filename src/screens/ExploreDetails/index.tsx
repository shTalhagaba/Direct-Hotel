import React from "react";
import { View, ScrollView, StatusBar, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { appImages, colors, routes } from "../../services";
import styles from "./styles";
import DetailHeader from "../../components/DetailHeader/DetailHeader";
import Button from "../../components/Button/Button";

interface ExploreDetailScreenProps {
  route: RouteProp<{ params: { item: Item } }, 'params'>;
}

interface Item {
  title: string;
  price: string;
  rating: number;
  currency: string;
}

const ExploreDetailScreen: React.FC<ExploreDetailScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  // Function to generate stars based on the rating
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Icon
        key={index}
        name="star"
        size={16}
        color={index < rating ? "#000" : "#ccc"}
        style={styles.starIcon}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.primaryWhite} />
      <DetailHeader
        leftIcon={appImages.arrowRight}
        leftIconPress={() => navigation.goBack()}
        rightIcon={true}
        item={item}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image source={appImages.itemImage} style={styles.image} />
          <View style={styles.infoContainer}>
            <View style={styles.infoInnerContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.currency}{item.price}</Text>
            </View>
            <View style={styles.ratingContainer}>
              {renderStars(item.rating)}
              <Text style={styles.rating}>{item.rating}</Text>
              <Text style={styles.rating}>{" . 12 reviews"}</Text>
            </View>
            <Text style={styles.location}>San Francisco, California</Text>
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.date}>Bio</Text>
          <Text style={styles.bio}>
            I’m passionate about making a difference in the lives of children
            and supporting families in any way I can. My goal is to provide a
            caring and enriching experience.
          </Text>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Text style={styles.date}>Date</Text>
            <Text style={styles.date}>Mon, July 29</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Text style={styles.duration}>Duration</Text>
            <Text style={styles.duration}>9:00 AM - 14:00 PM</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        btnTitle={"Book Now"}
        containerStyle={{ marginBottom: 30 }}
        onPress={() =>
          navigation.navigate("WithoutBottom", {
            screen: routes.requestService,
            params: { item: item },
          })
        }
      />
    </View>
  );
};

export default ExploreDetailScreen;
