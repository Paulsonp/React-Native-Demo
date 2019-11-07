import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, FlatList} from 'react-native';

import Header from 'component/Header';
import ListRow from 'component/ListRow';
const listItems = [
  {name: 'vikky pall', place: 'coimbatore'},
  {name: 'indrajith venugopal', place: 'ernamkulam'},
  {name: 'deepak s', place: 'palakkadu'},
  {name: 'mahesh', place: 'trivandrum'},
  {name: 'vishnu s pillai', place: 'idduki'},
  {name: 'suralal s suresh', place: 'trivandrum'},
  {name: 'vibin thomas', place: 'angamali'},
  {name: 'lenin jayaraj', place: 'edukki'},
  {name: 'chandulal', place: 'trivandrum'},
  {name: 'sneha', place: 'kannur'},
  {name: 'paulson ps', place: 'trivandrum'},
  {name: 'jayakrishnan', place: 'trivandrum'},
];

export default class App extends Component {
  state = {
    search: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.input_box}>
          <TextInput
            style={styles.input}
            placeholder="Search by names"
            onChangeText={text => {
              this.setState({search: text});
            }}
            value={this.state.search}
          />
        </View>
        <FlatList
          data={listItems.filter(employee => {
            return !this.state.search || employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
          })}
          renderItem={({item, index}) => <ListRow employee={item} index={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input_box: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  input: {
    padding: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#eee',
  },
});
