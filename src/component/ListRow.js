import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';

export default class ListRow extends Component {
  state = {
    showInfo: false,
  };
  morePressed = () => {
    this.setState({showInfo: !this.state.showInfo});
  };
  render() {
    const {employee, index} = this.props;
    return (
      <View key={employee.name} style={[styles.list_items, {backgroundColor: index % 2 === 0 ? 'white' : '#eee'}]}>
        <View style={styles.list_row}>
          <View style={styles.list_no}>
            <Text style={styles.list_no_i}>{index + 1}</Text>
          </View>
          <View style={styles.list_detail}>
            <Text style={styles.list_name}>{employee.name}</Text>
            <Text style={styles.list_sutitle}>{employee.place}</Text>
          </View>
          <View style={styles.list_info}>
            <TouchableHighlight style={styles.button} onPress={this.morePressed} underlayColor="#5398dc">
              <Text style={styles.buttonText}>More..</Text>
            </TouchableHighlight>
          </View>
        </View>
        {this.state.showInfo && (
          <View style={styles.moreText}>
            <Text>hide and show</Text>

            <Image source={{uri: 'http://localhost:3000/images/${employee.image}'}} />
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list_items: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
  },
  list_row: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    textAlign: 'center',
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
    marginRight: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  moreText: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
  },
});
