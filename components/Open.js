import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text, Content, Form, Input, Label, Header, Item } from 'native-base';

import * as firebase from "firebase";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09rNDxUbMRYkTnMR5C9s0YKleq--sxvA",
  authDomain: "mobile-dev-b16eb.firebaseapp.com",
  databaseURL: "https://mobile-dev-b16eb.firebaseio.com",
  projectId: "mobile-dev-b16eb",
  storageBucket: "mobile-dev-b16eb.appspot.com",
  messagingSenderId: "759211989822",
};
// // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default class Open extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async _loadResourcesAsync() {
    const loadedFonts = await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
    });
    return Promise.all([loadedFonts]);
  }
  
  SignUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      alert("invalid entry")
    }
  }

  LoginUser = (email, password) => {

  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => this.LoginUser(this.state.email, this.state.password)}
          >
            <Text>Login</Text>
          </Button>

          <Button style={{ marginTop: 20 }}
            full
            rounded
            primary
            onPress={() => this.SignUpUser(this.state.email, this.state.password)}
          >
            <Text>Sign Up</Text>
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
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
