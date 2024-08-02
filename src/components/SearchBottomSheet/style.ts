import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel, colors } from '../../services';

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
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(16),
    borderTopLeftRadius: widthPixel(20),
    borderTopRightRadius: widthPixel(20),
  },
  headerTitle: {
    color: colors.white,
    fontSize: widthPixel(18),
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: widthPixel(8),
    paddingHorizontal: widthPixel(10),
    marginBottom: heightPixel(16),
    width: '72%',
    marginLeft: widthPixel(18),
    height: heightPixel(44),
  },
  searchInput: {
    flex: 1,
    marginLeft: widthPixel(10),
    fontSize: widthPixel(14),
    color: colors.pureBlack,
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: widthPixel(5),
    marginLeft: widthPixel(12),
    borderWidth: 1,
    borderColor: colors.white,
    height: heightPixel(44),
    width: widthPixel(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: colors.white,
    fontSize: widthPixel(12),
  },
  recommendedText: {
    fontSize: widthPixel(15),
    color: colors.pureBlack,
    marginVertical: heightPixel(10),
    marginLeft: widthPixel(5),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(10),
  },
  icon: {
    marginRight: widthPixel(10),
  },
  itemTextContainer: {
    flexDirection: 'column',
  },
  itemPrimaryText: {
    fontSize: widthPixel(16),
    color: colors.primary,
  },
  itemSecondaryText: {
    fontSize: widthPixel(14),
    color: colors.grey,
  },
});

export default styles;
