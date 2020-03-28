import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    
    description: {
        fontSize: 15,
        lineHeight: 26,
        color:'#737380',
    },

    casoList: {
        marginTop:32,
    },
    caso:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,

    },
    casoProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',

    },
    casoValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'

    },
















});
