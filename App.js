import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { connectToDevTools } from "react-devtools-core";

if (__DEV__) {
    connectToDevTools({
        host: "localhost",
        port: 8097,
    });
}

export default function App() {
    console.log("hi");
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
