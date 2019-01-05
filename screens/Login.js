import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAOw_TBIlxp1BVLt1XqYCYUs272Fak14jA",
  authDomain: "onecircle-d06b2.firebaseapp.com",
  databaseURL: "https://onecircle-d06b2.firebaseio.com",
  projectId: "onecircle-d06b2",
  storageBucket: "onecircle-d06b2.appspot.com",
  messagingSenderId: "419678085687"

};

firebase.initializeApp(firebaseConfig);
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })

  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }
  signUpUser = (email, password) => {

    try {
      if (this.state.password.length < 6) {
        alert("Masukkan lebih dari 6 karakter")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }

  }
  loginUser = (email, password) => {
    try {

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)

      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
    const { type, token, expires,
      permissions,
      declinedPermissions,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('2123838971010463', { permission: ['public_profile'] })

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)

      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
            
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: "white" }}>Sign Up</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: "white" }}>Login With Facebook</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
