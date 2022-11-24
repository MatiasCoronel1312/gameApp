import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create ({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 7,
    },
    number:{
        fontSize: 22,
        fontFamily: 'StencilB',
        color: colors.text,

    }
})