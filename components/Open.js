import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//importing firebase
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDI79xZHw333zRe8P_3vhl8zVIakj4KvR8",
    authDomain: "project-sn-76a96.firebaseapp.com",
    databaseURL: "https://project-sn-76a96.firebaseio.com",
    projectId: "project-sn-76a96",
    storageBucket: "project-sn-76a96.appspot.com",
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class Open extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                Sithija Shehara
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
