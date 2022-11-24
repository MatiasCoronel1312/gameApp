import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    content : {
        width: '70%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 18,
        color: colors.text,
        padding: 10,
        fontFamily: 'StencilR',
    },
    containerButton : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
    },
    return: {
        padding: 20,
    }
});