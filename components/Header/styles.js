import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },

    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default styles
