import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList, Image} from 'react-native';
// import axios from 'axios'
import Header from 'component/Header';
import ListRow from 'component/ListRow';
import LogoImage from 'images/logo.png';

export default class EmployeeList extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    search: null,
    listItems: [],
  };
  componentDidMount() {
    fetch('http://192.168.1.199:3000/employee')
      .then(response => response.json())
      .then(result => this.setState({listItems: result}));
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image style={[Platform.OS === 'ios' ? {marginTop: 50} : {marginTop: 10}]} resizeMode="contain" source={LogoImage} />
        </View>
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
            return (
              !this.state.search ||
              employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
              employee.place.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ||
              employee.position.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({item, index}) => <ListRow employee={item} index={index} navigation={this.props.navigation} />}
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
