import React, {Component} from 'react';
import {Text, View, Platform} from 'react-native';

import HeaderStyle from 'styles/HeaderStyle';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={[HeaderStyle.welcome, Platform.OS === 'ios' ? {marginTop: 40, fontSize: 25} : {}]}>
          Employees list Neoito
        </Text>
      </View>
    );
  }
}
