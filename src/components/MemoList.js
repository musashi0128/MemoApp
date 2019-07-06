import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memolist}>

        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memolistItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2019/10/10</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.memolistItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memolist: {
    width: '100%',
    flex: 1,
  },
  memolistItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
