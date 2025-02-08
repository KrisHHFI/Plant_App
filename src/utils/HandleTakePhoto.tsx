import { launchCamera } from 'react-native-image-picker';

export const handleTakePhoto = (setImageUri: (uri: string | null) => void) => {
    launchCamera(
        { mediaType: 'photo', quality: 0.5 },
        (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorMessage);
            } else {
                const uri = response.assets && response.assets[0].uri;
                setImageUri(uri || null);
            }
        }
    );
};
