//const FBSDK = require('react-native-fbsdk');
/**const {
  LoginButton,
} = FBSDK;*/

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';

export default class YourApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          //publishPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('YourApp', () => YourApp);
