import  { Text, StyleSheet, View } from "react-native";

export default function Service(){
    return(
        <View style={styles.container}>
            <Text>Tela Service carregada.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c37d7d"
    }
})