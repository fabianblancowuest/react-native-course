import { Button, StyleSheet } from "react-native";

export const colors = {
    darkGray: "#2d2d2d",
    lightGray: "#9b9b9b",
    orange: "#ff9427",
    
    textPrimary: "white",
    textSecondary: "#666666",
    background: "#000000"
}

export const globalStyles = StyleSheet.create({
    calculatorContainer: {
        display: "flex",
        flex: 1,
        padding: 20,
        justifyContent: "flex-end"
    },

    background: {
        flex: 1,
        backgroundColor: colors.background,
    },

    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: "right",
        marginBottom: 10,
        fontWeight: "400"
    },
    
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: "right",
        fontWeight: "300"
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
    },

    buttonText: {
        color: "white",
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        fontWeight: "300"
        
    }
})