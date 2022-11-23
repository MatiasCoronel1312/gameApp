import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create ( {
    container: {
        flex : 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title : {
        fontSize : 22,
        color: '#3B0B0B',
        textAlign: 'center',
        paddingVertical: 20,
    },

    label:{
        fontSize: 18,
        color: '#3B0B0B',
        paddingVertical: 5,
        textAlign: 'center',
    },

    input:{
        width: '100%',
        borderBottomColor: '#3B0B0B',
        borderBottomWidth:1,
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: "center",
    },

    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    buttonContainer:{
        flexDirection: 'row',
        width: '55%',
        justifyContent: 'space-around',
        marginTop: 20,
    }
})