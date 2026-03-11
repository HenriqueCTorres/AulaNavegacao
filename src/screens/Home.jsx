import  { Text, StyleSheet, View } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Tela Inicial carregada.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey"
    }
})