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
        fontFamily: 'StencilR',
    },

    label:{
        fontSize: 18,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
        fontFamily: 'StencilR',
    },

    input:{
        //width: '100%',
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: 'StencilR',
    },

    inputContainer:{
        width: '55%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,

    },

    buttonContainer:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer:{
        width: '55%',
        height: 180,
        justifyContent: 'space-around',
        alignItems:'center',
        marginVertical: 15,
    },
    confirmedTitle:{
        fontSize: 17,
        color: colors.text,
        fontFamily: 'StencilR',
    },
    confirmedNumber:{
        fontSize:22,
        color: colors.text,
        fontFamily: 'StencilB',
    },
})