import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import EmployeeList from 'component/EmployeeList';
import EmployeeInfo from 'component/EmployeeInfo';
import AboutApp from 'component/AboutApp';

export default createStackNavigator(
  {
    Home: {screen: EmployeeList},
    Info: {screen: EmployeeInfo},
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'teal',
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    List: {screen: EmployeeList},
    About: {screen: AboutApp},
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        tabBarIcon: ({tintColor}) => {
          const route = navigation.state.routeName;
          console.log('route', route);
          const name = {
            List: 'list',
            About: 'info-circle',
          }[route];
          return <Icon name={name} color={tintColor} size={22} />;
        },
        tabBarOptions: {
          activeBackgroundColor: '#E6F0FA',
        },
      };
    },
  },
);
