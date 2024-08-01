import { StyleSheet, Dimensions, Platform } from 'react-native';
import { heightPixel, widthPixel, colors } from '../../services';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      width: '100%',
      backgroundColor: colors.primaryWhite,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      paddingVertical: 7,
    },
    modalView2: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    modalLine: {
      width: 40,
      height: 4,
      backgroundColor: 'lightgrey',
      alignSelf: 'center',
      borderRadius: 10,
      marginBottom: 10,
    },
    heading: {
      fontSize: 16,
      color: colors.primaryBlack,
      fontWeight: '700',
      textAlign: 'center',
    },
    icon: {
      height: 20,
      width: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBlockColor: 'lightgrey',
      borderBottomWidth: 0.4,
    },
    itemTxt: {
      fontSize: 16,
      color: '#1A1A1A',
      marginStart: 4,
      textAlign: 'center',
    },
    quantityContainer: {
      marginStart: 10,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plusContainer: {
      backgroundColor: colors.primary,
      width: widthPixel(27),
      height: heightPixel(27),
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    minusContainer: {
      backgroundColor: colors.primaryWhite,
      borderWidth: 1,
      borderColor: colors.primary,
      width: widthPixel(27),
      height: heightPixel(27),
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    crossContainer: {
      backgroundColor: colors.primaryWhite,
      width: widthPixel(27),
      height: heightPixel(27),
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    currencyContainer: {
      backgroundColor: colors.primaryWhite,
      borderWidth: 1,
      borderColor: colors.primary,
      height: heightPixel(27),
      borderRadius: 6,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    plusTxt: {
      fontSize: 18,
      color: colors.primaryWhite,
      fontWeight: '400',
    },
    minusTxt: {
      fontSize: 18,
      color: colors.primary,
      fontWeight: '400',
    },
    desTxt: {
      fontSize: 17,
      color: colors.grey,
      fontWeight: '500',
      textAlign: 'center',
    },
    childContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBlockColor: 'lightgrey',
      borderBottomWidth: 0.5,
    },
    currencyText: {
      fontSize: 13,
      color: colors.primaryBlack,
      fontWeight: '700',
    },
    btnContainer: {
      marginBottom: 20,
      marginHorizontal: 20,
    },
    childText: {
      fontSize: 15,
      color: '#1A1A1A',
      marginStart: 4,
    },
  });
  
export default styles;
