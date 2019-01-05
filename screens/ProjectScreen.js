import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

class ProjectScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Button title="LOG OUT" onPress={()=>this.props.navigation.navigate('Welcome')}/>
            </View>
        );
    }
}
export default ProjectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});