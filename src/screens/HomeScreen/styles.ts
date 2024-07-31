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
    elevation: 3, // Reset elevation to avoid full shadow on Android
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Optional: bottom border for separation
    overflow: 'hidden', // Ensure the shadow is contained
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
});

export default styles;
