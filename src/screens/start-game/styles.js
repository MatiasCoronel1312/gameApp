import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
 
export const styles = StyleSheet.create ( {
    container: {
        backgroundColor: colors.background,
        flex : 1,
        alignItems: 'center',
        marginVertical: 15,
    },
    title : {
        fontSize : 22,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },

    label:{
        fontSize: 18,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },

    input:{
        width: '100%',
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: "center",
    },

    inputContainer:{
        
        padding: 15,
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