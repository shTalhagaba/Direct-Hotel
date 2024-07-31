import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { appImages, colors, widthPixel, heightPixel, wp } from '../../services';

// Define the prop types
interface SearchProps {
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  editable?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  keyboardType?: string;
  textAlignVertical?: string;
  maxLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: string;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  refInner?: React.RefObject<TextInput>;
}

const Search: React.FC<SearchProps> = (props) => {
  return (
    <View style={styles.searchContainer}>
      <Image source={appImages.search} style={styles.searchIcon} />
      <TextInput
        value={props.value}
        style={styles.searchInput}
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholderGrey}
        multiline={props.multiline}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        maxLength={props.maxLength}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={props.blurOnSubmit}
        ref={props.refInner}
      />
      <Image source={appImages.filter} style={styles.filterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: wp(1),
    flex: 1,
  },
  searchIcon: {
    width: widthPixel(23),
    height: heightPixel(23),
    tintColor: colors.grey,
    marginLeft: wp(2),
  },
  searchInput: {
    height: heightPixel(44),
    borderRadius: 20,
    paddingHorizontal: wp(2), // Adjusted for better spacing
    flex: 1,
    fontSize: heightPixel(16),
    color: colors.grey,
  },
  filterIcon: {
    width: widthPixel(23),
    height: heightPixel(23),
    marginRight: wp(2),
  },
});

export default Search;
