import { StyleSheet } from 'react-native';

const NAVBAR_HEIGHT = 70;

const styles = StyleSheet.create({
  addPlantPageBottomButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 70,
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
    alignItems: 'center',
    borderColor: '#c7c7c7',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    overflow: 'hidden',
    width: '100%',
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
    backgroundColor: 'white',
    flex: 1,
  },
  pageContent: {
    alignItems: 'center',
    //backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: NAVBAR_HEIGHT + 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  pageTitleContainer: {
    backgroundColor: 'black',
    height: 80,
    justifyContent: 'center',
    width: '100%',
  },
  pageTitle: {
    color: 'orange',
    fontFamily: 'Audiowide-Regular',
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});

export default styles;
