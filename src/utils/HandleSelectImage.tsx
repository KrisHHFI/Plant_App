/**
 * File Name: handleSelectImage.tsx
 * Description: This function opens the users local image folder 
 * and adds the chosen image url to the plant
 */
import { launchImageLibrary } from 'react-native-image-picker';

export const handleSelectImage = (setImageUri: (uri: string | null) => void) => {
    launchImageLibrary(
        { mediaType: 'photo', quality: 0.5 },
        (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image Picker Error: ', response.errorMessage);
            } else {
                const uri = response.assets && response.assets[0].uri;
                setImageUri(uri || null);
            }
        }
    );
};
