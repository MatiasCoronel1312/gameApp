import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 5,
    }
})