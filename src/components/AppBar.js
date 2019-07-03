import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitile}>MEMO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    right:  0,
    left: 0,
    height: 80,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#265366',
    shadowColor: '#000',
    shadowOffset: { width:0, height:0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitile: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AppBar;
