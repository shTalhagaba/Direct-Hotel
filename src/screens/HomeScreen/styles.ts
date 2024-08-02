import { StyleSheet, Platform } from 'react-native';
import { heightPixel, widthPixel, SCREEN_WIDTH } from '../../services';
import { colors } from '../../services';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? heightPixel(6) : 0,
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteBorder,
    overflow: 'hidden',
  },
  tab: {
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingVertical: heightPixel(12),
    borderBottomColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    width: SCREEN_WIDTH / 3,
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
    backgroundColor: colors.black03,
    zIndex: -1,
    width: SCREEN_WIDTH / 3,
    height: heightPixel(56),
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  bottomBlock: {
    padding: widthPixel(20),
    backgroundColor: colors.black03,
    borderTopLeftRadius: widthPixel(20),
    borderTopRightRadius: widthPixel(20),
    marginTop: heightPixel(30),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: widthPixel(18),
    marginBottom: heightPixel(10),
    color: colors.black,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPixel(10),
    backgroundColor: colors.primaryWhite,
  },
  cardIcon: {
    width: widthPixel(24),
    height: heightPixel(24),
    marginRight: widthPixel(10),
  },
  cardText: {
    fontSize: widthPixel(16),
    color: colors.black,
    marginLeft: widthPixel(10),
  },
  partnershipText: {
    fontWeight: 'bold',
    fontSize: widthPixel(13),
    marginTop: heightPixel(30),
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
    width: SCREEN_WIDTH / 4,
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default styles;
