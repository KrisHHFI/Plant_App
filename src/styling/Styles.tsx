import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { AppContext } from '../context/Context';

const NAVBAR_HEIGHT = 70;
const APP_FONT = 'Audiowide-Regular';

export const useDynamicStyles = () => {
  const { THEME_BACKGROUND_COLOUR_PRIMARY } = useContext(AppContext);

  return StyleSheet.create({
    addEditDeletePlantPageBottomButton: {
      alignItems: 'center',
      backgroundColor: 'lightgrey',
      borderRadius: 25,
      height: 50,
      justifyContent: 'center',
      width: 70,
    },
    addEditDeletePlantPageInput: {
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      fontSize: 16,
      height: 50,
      paddingLeft: 5,
      width: '100%',
    },
    appContentContainer: {
      flex: 1,
    },
    appSafeAreaContainer: {
      backgroundColor: 'transparent',
      flex: 1,
    },
    boldText: {
      fontWeight: 'bold',
    },
    floatingButton: {
      alignItems: 'center',
      backgroundColor: 'black',
      borderRadius: 10,
      height: 50,
      justifyContent: 'center',
      margin: 5,
      width: 50,
    },
    floatingButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 40,
      paddingLeft: 15,
      paddingRight: 15,
    },
    floatingButtonTextContainer: {
      width: 'auto',
    },
    scrollContainer: {
      borderColor: '#c7c7c7',
      borderRadius: 10,
      borderWidth: 1,
      width: '100%',
    },
    listItemContainer: {
      borderColor: '#c7c7c7',
      borderRadius: 10,
      borderWidth: 1,
      overflow: 'hidden',
      width: '100%',
    },
    listItemContainerDivider: {
      marginBottom: 15,
    },
    listItemText: {
      fontStyle: 'italic',
      paddingBottom: 5,
      paddingLeft: 10,
    },
    listItemImageContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderBottomColor: '#c7c7c7',
      borderBottomWidth: 1,
      height: 200,
      justifyContent: 'center',
      width: '100%',
    },
    listItemImage: {
      flex: 1,
      resizeMode: 'contain',
      width: '100%',
    },
    listItemTitle: {
      fontSize: 23,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingTop: 5,
    },
    navBarButton: {
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: THEME_BACKGROUND_COLOUR_PRIMARY,
      borderColor: 'black',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      flex: 1,
      justifyContent: 'center',
    },
    navBarButtonActive: {
      backgroundColor: 'black',
    },
    navBarContainer: {
      borderTopColor: 'black',
      borderTopWidth: 3,
      bottom: 0,
      flexDirection: 'row',
      height: NAVBAR_HEIGHT,
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
    },
    noPlantsTextContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    paddingSmall: {
      padding: 10,
    },
    pageContainer: {
      backgroundColor: THEME_BACKGROUND_COLOUR_PRIMARY,
      flex: 1,
    },
    pageContent: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: NAVBAR_HEIGHT + 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 25,
    },
    pageContentCenter: {
      justifyContent: 'center',
    },
    pText: {
      fontSize: 20,
    },
    pageTitleContainer: {
      backgroundColor: 'black',
      height: 80,
      justifyContent: 'center',
      width: '100%',
    },
    pageTitle: {
      color: 'orange',
      fontFamily: APP_FONT,
      fontSize: 30,
      textAlign: 'center',
    },
    redBackground: {
      backgroundColor: 'red',
    },
    row: {
      flexDirection: 'row',
    }
  });
};