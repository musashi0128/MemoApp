import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email : '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit() {
    // Login処理
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email:text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password:text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#DDD',
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
