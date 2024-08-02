import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the search icon and pin icon
import { colors } from '../../services';
import {
  searchApi,
  topDestinationSearchApi,
} from '../../services/network/appApi';

const { height } = Dimensions.get('screen');

const RecommendedItem = ({
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

const SearchBottomSheet = ({
  bottomSheetRef,
  closeBottomSheet,
  setLocation,
  recentSearchList,
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommended, setShowRecommended] = useState(true);
  const [recommendedSearches, setRecommendedSearches] = useState([]);

  const fetchTopDestinations = async () => {
    const body = {
      language: 'en',
    };
    try {
      const response = await topDestinationSearchApi(body);
      setRecommendedSearches(response?.data?.top_destinations);
      setShowRecommended(true);
    } catch (error) {
      console.error('Error fetching top destinations:', error);
    }
  };

  useEffect(() => {
    fetchTopDestinations();
  }, []);

  useEffect(() => {
    if (searchText?.length > 0) {
      setIsLoading(true);
      fetchSearchApi(searchText);
    } else {
      setShowRecommended(true);
    }
  }, [searchText]);

  const fetchSearchApi = async (query) => {
    try {
      const response = await searchApi(query); // Assuming searchApi is an async function that takes a query string
      setSearchResults(response.data); // Update this line according to your API response structure
      setShowRecommended(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ item }) => (
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
      height={height * 0.92}
      openDuration={250}
      customStyles={{
        container: styles.bottomSheetContainer,
      }}
    >
      <View style={styles.contentContainer}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.primary,
            paddingTop: 30,
          }}
        >
          <View style={styles.searchContainer}>
            <Icon name="search" size={24} color={colors.primary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={colors.grey}
              onChangeText={(value) => setSearchText(value)}
              value={searchText}
            />
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={closeBottomSheet}
          >
            <Text style={styles.searchButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          {searchResults?.length > 0 ? null : (
            <View style={{flexGrow:0,}}>
              <Text style={styles.recommendedText}>{'Recent Searches'}</Text>
              <FlatList
                data={recentSearchList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />
            </View>
          )}
          <Text style={styles.recommendedText}>
            {showRecommended && searchText?.length <= 1
              ? 'Recommended Searches'
              : 'Search Results'}
          </Text>
          {isLoading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <FlatList
              data={
                showRecommended && searchText?.length <= 1
                  ? recommendedSearches
                  : searchResults
              }
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          )}
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: '72%',
    marginLeft: 18,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: colors.pureBlack,
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: colors.white,
    height: 44,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: colors.white,
    fontSize: 12,
  },
  recommendedText: {
    fontSize: 15,
    color: colors.pureBlack,
    marginVertical: 10,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemTextContainer: {
    flexDirection: 'column',
  },
  itemPrimaryText: {
    fontSize: 16,
    color: colors.primary,
  },
  itemSecondaryText: {
    fontSize: 14,
    color: colors.grey,
  },
});

export default SearchBottomSheet;
