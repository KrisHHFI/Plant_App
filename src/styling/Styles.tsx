import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  AddPlantPageBottomButton: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 50,
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
    bottom: 50,
    height: 50,
    justifyContent: 'center',
    left: '50%',
    position: 'absolute',
    transform: [{ translateX: -25 }],
    width: 50,
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
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  }
});

export default styles;
