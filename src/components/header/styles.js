import { StyleSheet } from "react-native";
import colors from "../../utils/colors";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
    },
    title: {
        fontSize: 28,
        color: colors.text,
        fontWeight: 'bold' 
    }
});