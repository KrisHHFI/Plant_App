import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addPlantPageBottomButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 50,
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
    backgroundColor: 'yellow',
    flex: 1,
  },
  listPageAddButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    bottom: 10,
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
    backgroundColor: 'grey',
    borderColor: 'blue',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  navBarContainer: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  pageContainer: {
    alignItems: 'center',
    backgroundColor: 'orange',
    flex: 1,
    marginBottom: 50,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
  },
  row: {
    flexDirection: 'row',
  }
});

export default styles;
