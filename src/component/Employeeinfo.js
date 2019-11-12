import React, {Component} from 'react';

import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

import Stars from 'component/Stars';

export default class EmployeeInfo extends Component {
  static navigationOptions = {
    title: 'Employee Details',
  };
  addReview = () => {
    this.props.navigation.navigate('AddEmployee');
  };
  render() {
    const place = this.props.navigation.getParam('place');

    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{
              uri: `http://192.168.1.199:3000/${place.image}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.info}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.address}>{place.position}</Text>
            <Stars rating={place.rating} />
            {/* <TouchableOpacity style={styles.button} onPress={this.addReview}>
              <Text style={styles.buttonText}>Add Review</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  address: {
    color: 'grey',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
    textAlign: 'center',
  },
});
