import { StyleSheet } from 'react-native';
import { heightPixel, hp, widthPixel, colors } from '../../services';

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
    borderBottomColor: '#ddd',
    marginHorizontal: widthPixel(14),
  },
  alertIconContainer: {
    backgroundColor: '#EFF1F3',
    alignItems: 'center',
    borderRadius: 5,
    height: heightPixel(40),
    justifyContent: 'center',
    paddingHorizontal: widthPixel(10),
  },
  alertIcon: {
    width: widthPixel(20),
    height: heightPixel(20),
  },
  scrollContainer: {
    paddingVertical: heightPixel(10),
    marginTop: hp(3),
  },
  favoritesContainer: {
    marginBottom: heightPixel(10),
  },
  list: {
    paddingBottom: heightPixel(20),
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: heightPixel(10),
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
    width: widthPixel(155),
    height: heightPixel(124),
    borderRadius: 5,
  },
  imageMaster: {
    width: widthPixel(25),
    height: heightPixel(22),
    borderRadius: 5,
  },
  heartIconContainer: {
    position: 'absolute',
    top: heightPixel(17),
    right: widthPixel(17),
  },
  infoContainer: {
    paddingHorizontal: widthPixel(10),
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '600',
  },
  location: {
    fontSize: 13,
    color: colors.textGrey,
    marginTop: heightPixel(1),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPixel(7),
  },
  starIcon: {
    marginRight: widthPixel(2),
  },
  rating: {
    marginLeft: widthPixel(5),
    fontSize: 14,
    color: colors.black,
  },
  price: {
    fontSize: 15,
    marginTop: heightPixel(10),
    color: colors.black,
  },
  additionalInfo: {
    paddingHorizontal: widthPixel(10),
  },
  separator: {
    height: heightPixel(8),
    backgroundColor: '#EBEBEB',
    marginVertical: heightPixel(10),
  },
  separator1: {
    height: heightPixel(1),
    backgroundColor: '#ddd',
    marginVertical: heightPixel(1),
  },
  detailsSection: {
    paddingHorizontal: widthPixel(10),
    marginVertical: hp(2),
    marginHorizontal: widthPixel(14),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginBottom: heightPixel(5),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPixel(10),
  },
  row2: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    fontSize: 16,
    color: colors.black,
    marginTop: heightPixel(4),
  },
  date: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
    marginTop: heightPixel(16),
  },
  edit: {
    fontSize: 16,
    color: colors.black,
    marginTop: heightPixel(4),
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  paymentSection: {
    paddingHorizontal: widthPixel(10),
    marginHorizontal: widthPixel(14),
    marginVertical: heightPixel(15),
  },
  totalSection: {
    paddingHorizontal: widthPixel(10),
    marginHorizontal: widthPixel(14),
    marginTop: heightPixel(8),
  },
  totalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginBottom: heightPixel(5),
  },
  totalPrice: {
    fontSize: 15,
    marginTop: heightPixel(10),
    color: colors.black,
  },
  cardNumber: {
    fontSize: 15,
    color: colors.black,
    marginLeft: widthPixel(10),
  },
});

export default styles;
