import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, FlatList} from 'react-native';
// import axios from 'axios'

import Header from 'component/Header';
import ListRow from 'component/ListRow';

export default class App extends Component {
  state = {
    search: null,
    listItems: [],
  };
  componentDidMount() {
    fetch('http://localhost:3000/employee')
      .then(response => response.json())
      .then(result => this.setState({listItems: result}));
  }
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
          data={this.state.listItems.filter(employee => {
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
