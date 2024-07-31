import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPixel, widthPixel, hp } from '../../services';
import { colors } from '../../services';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? hp(6) : 0,
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    overflow: 'hidden',
  },
  tab: {
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingVertical: heightPixel(12),
    borderBottomColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    width: width / 3,
  },
  selectedTab: {
    borderBottomColor: colors.white,
  },
  tabIcon: {
    width: widthPixel(30),
    height: heightPixel(30),
    marginRight: widthPixel(3),
  },
  tabTitle: {
    color: colors.pureBlack,
    fontSize: widthPixel(15),
    fontWeight: '700',
  },
  overlayLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    zIndex: -1,
    width: width / 3,
    height: heightPixel(56),
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  bottomBlock: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems:'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: colors.black,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 10,
  },
  partnershipText: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 30,
    color: colors.pureBlack,
  },
  partnersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partnerImage: {
    width: widthPixel(24),
    height: heightPixel(18),
    marginTop: heightPixel(12),
  },
  imageContainer: {
    width: width/4,
    alignItems:'center',
    alignContent:'center',
  },
});

export default styles;
