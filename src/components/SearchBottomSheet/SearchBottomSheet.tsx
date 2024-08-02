import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, SCREEN_HEIGHT } from '../../services';
import { searchApi, topDestinationSearchApi } from '../../services/network/appApi';
import styles from './style';

interface RecommendedItemProps {
  item: any;
  text: string;
  location: string;
  setLocation: (item: any) => void;
  closeBottomSheet: () => void;
}

const RecommendedItem: React.FC<RecommendedItemProps> = ({
  item,
  text,
  location,
  setLocation,
  closeBottomSheet,
}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      setLocation(item);
      closeBottomSheet();
    }}
  >
    <Icon name="place" size={24} color={colors.primary} style={styles.icon} />
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemPrimaryText}>{text}</Text>
      <Text style={styles.itemSecondaryText}>{location}</Text>
    </View>
  </TouchableOpacity>
);

interface SearchBottomSheetProps {
  bottomSheetRef: React.RefObject<RBSheet>;
  closeBottomSheet: () => void;
  setLocation: (item: any) => void;
  recentSearchList: any[];
}

const SearchBottomSheet: React.FC<SearchBottomSheetProps> = ({
  bottomSheetRef,
  closeBottomSheet,
  setLocation,
  recentSearchList,
}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showRecommended, setShowRecommended] = useState<boolean>(true);
  const [recommendedSearches, setRecommendedSearches] = useState<any[]>([]);

  useEffect(() => {
    const fetchTopDestinations = async () => {
      try {
        const response = await topDestinationSearchApi({ language: 'en' });
        setRecommendedSearches(response?.data?.top_destinations || []);
        setShowRecommended(true);
      } catch (error) {
        console.error('Error fetching top destinations:', error);
      }
    };

    fetchTopDestinations();
  }, []);

  useEffect(() => {
    if (searchText.length > 0) {
      setIsLoading(true);
      const fetchSearchApi = async (query: string) => {
        try {
          const response = await searchApi(query);
          setSearchResults(response.data || []);
          setShowRecommended(false);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchSearchApi(searchText);
    } else {
      setShowRecommended(true);
    }
  }, [searchText]);

  const renderItem = ({ item }: { item: any }) => (
    <RecommendedItem
      text={item?.title}
      location={item?.label}
      setLocation={setLocation}
      closeBottomSheet={closeBottomSheet}
      item={item}
    />
  );

  return (
    <RBSheet
      ref={bottomSheetRef}
      height={SCREEN_HEIGHT * 0.92}
      openDuration={250}
      customStyles={{ container: styles.bottomSheetContainer }}
    >
      <View style={styles.contentContainer}>
        <View style={{ flexDirection: 'row', backgroundColor: colors.primary, paddingTop: 30 }}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={24} color={colors.primary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={colors.grey}
              onChangeText={setSearchText}
              value={searchText}
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={closeBottomSheet}>
            <Text style={styles.searchButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          {searchResults.length === 0 && (
            <View style={{ height:'50%', }}>
              <Text style={styles.recommendedText}>Recent Searches</Text>
              <FlatList
                data={recentSearchList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                inverted
              />
            </View>
          )}
          <Text style={styles.recommendedText}>
            {showRecommended && searchText.length <= 1
              ? 'Recommended Searches'
              : 'Search Results'}
          </Text>
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <FlatList
              data={showRecommended && searchText.length <= 1 ? recommendedSearches : searchResults}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
      </View>
    </RBSheet>
  );
};

export default SearchBottomSheet;
