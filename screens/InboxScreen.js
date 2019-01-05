import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class InboxScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>InboxScreen</Text>
            </View>
        );
    }
}
export default InboxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});