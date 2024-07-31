import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel, widthPixel } from '../../services';
import { colors } from '../../services';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginHorizontal: 14,
  },
  alertIconContainer: {
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  alertIcon: {
    width: 20,
    height: 20,
  },
  scrollContainer: {
    padding: 10,
  },
  favoritesContainer: {
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  infoInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartIcon: {
    width: widthPixel(27),
    height: heightPixel(27),
  },
  image: {
    width: '100%',
    height: heightPixel(310),
    borderRadius: 12,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 17,
    right: 17,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: widthPixel(19),
    color: colors.black,
    width: '50%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  starIcon: {
    marginRight: 2,
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.black,
  },
  distance: {
    fontSize: 15,
    color: colors.textGrey,
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 3,
    color: colors.black,
  },
  favoriteCard: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  favoriteImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  favoriteTitle: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
  additionalInfo: {
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 14,
    color: colors.textGrey,
    marginTop: 5,
  },
  bio: {
    fontSize: widthPixel(15),
    color: colors.textGrey,
    marginVertical: 5,
    marginRight: 13,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightGrey,
    marginVertical: 10,
  },
  date: {
    fontSize: 17,
    color: colors.black,
    marginVertical: 7,
    fontWeight: '400',
  },
  duration: {
    fontSize: 17,
    color: colors.black,
    marginVertical: 7,
    fontWeight: '400',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 7,
  },
});

export default styles;
