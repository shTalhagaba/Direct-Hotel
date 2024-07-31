import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { appImages, colors, heightPixel, widthPixel } from '../../services';

const { width } = Dimensions.get('window');

// Image sources
const images: { uri: string }[] = [
  { uri: appImages.itemImage },
  { uri: appImages.itemImage },
  { uri: appImages.itemImage },
];

const ImageSlider: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = (
    event: Animated.NativeSyntheticEvent<Animated.NativeScrollEvent>,
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: { uri: string } }) => (
    <View style={{ width }}>
      <Image source={item?.uri} style={styles.sliderImage} />
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotContainer}>
      {images.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentIndex ? colors.white : '#A3A3A3',
            },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { listener: handleScroll, useNativeDriver: false },
        )}
      />
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderImage: {
    width: '90%',
    height: heightPixel(346),
    resizeMode: 'cover',
    borderRadius: widthPixel(12),
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    marginHorizontal: 5,
  },
});

export default ImageSlider;
