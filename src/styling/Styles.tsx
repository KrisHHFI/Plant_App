import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContentView: {
        flex: 1,
    },
    appSafeAreaView: {
        backgroundColor: 'yellow',
        flex: 1,
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
});

export default styles;
