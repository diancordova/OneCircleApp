import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class CircleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>CircleScreen</Text>
            </View>
        );
    }
}
export default CircleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});