import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const listItems = [
  {name: 'vikky pall', place: 'coimbatore'},
  {name: 'indrajith venugopal', place: 'ernamkulam'},
  {name: 'deepak s', place: 'palakkadu'},
  {name: 'mahesh', place: 'trivandrum'},
  {name: 'vishnu s pillai', place: 'idduki'},
  {name: 'suralal s suresh', place: 'trivandrum'},
];

export default class App extends Component {
  state = {
    search: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Employees list Neoito</Text>
        </View>
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
        {listItems
          .filter(employee => {
            return !this.state.search || employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
          })
          .map((employee, index) => {
            return (
              <View key={employee.name} style={[styles.list_items, {backgroundColor: index % 2 === 0 ? 'white' : '#eee'}]}>
                <View style={styles.list_no}>
                  <Text style={styles.list_no_i}>{index + 1}</Text>
                </View>
                <View style={styles.list_detail}>
                  <Text style={styles.list_name}>{employee.name}</Text>
                  <Text style={styles.list_sutitle}>{employee.place}</Text>
                </View>
                <View style={styles.list_info}>
                  <Text>More..</Text>
                </View>
              </View>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  list_items: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  list_no: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_no_i: {
    color: 'green',
    fontSize: 15,
  },
  list_detail: {
    flexDirection: 'column',
    flex: 8,
  },
  list_name: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  list_sutitle: {
    fontSize: 15,
    color: 'grey',
    textTransform: 'capitalize',
  },
  list_info: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_box: {
    padding: 10,
  },
  input: {
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#eee',
  },
});
