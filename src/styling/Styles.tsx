import { StyleSheet } from 'react-native';

const NAVBAR_HEIGHT = 70; 

const styles = StyleSheet.create({
  addPlantPageBottomButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    height: NAVBAR_HEIGHT,
    justifyContent: 'center',
    width: NAVBAR_HEIGHT,
  },
  addPlantPageInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  appContentContainer: {
    flex: 1,
  },
  appSafeAreaContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  listPageAddButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    bottom: NAVBAR_HEIGHT + 10,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: 50,
  },
  listPageScrollContainer: {
    width: '100%',
  },
  listItemContainer: {
    backgroundColor: 'cyan',
    marginTop: 15,
    overflow: 'hidden',
    width: '100%',
  },

  listItemImage: {
    height: 160,
    width: '100%',
    resizeMode: 'cover',
  },

  navBarButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  navBarButtonActive: {
    backgroundColor: 'black',
  },
  navBarButtonText: {
    color: 'black',
  },
  navBarButtonTextActive: {
    color: 'white',
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
  pageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: NAVBAR_HEIGHT + 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
  },
  row: {
    flexDirection: 'row',
  }
});

export default styles;
