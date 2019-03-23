import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessageScreen from '../screens/MessageScreen';
import FilterScreen from '../screens/FilterScreen';
import { Icon } from 'react-native-elements';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' focused={focused} 
    name={ Platform.OS === 'ios'? `ios-map ${focused ? '' : '-outline'}` : 'md-map'  } 
    color={tintColor} size={32}/> 
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='ionicon' focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
      color={tintColor} size={32}
    />
  ),
};

const FilterStack = createStackNavigator({
  Filter: FilterScreen,
});

FilterStack.navigationOptions = {
  tabBarLabel: 'Filter',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='material-community'
      focused={focused}
      name={Platform.OS === 'ios' ? 'filter-outline' : 'filter-outline'}
      color={tintColor} size={32}
    />
  ),
};

const MessageStack = createStackNavigator({
  Message: MessageScreen,
});


MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='feather' focused={focused} 
      name={Platform.OS === 'ios' ? 'message-circle' : 'message-circle'}
      color={tintColor} size={32}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
  

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon type='feather' focused={focused} 
      name={Platform.OS === 'ios' ? 'settings' : 'settings'}
      color={tintColor} size={32}
    />
  ), 
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  FilterStack,
  MessageStack,
  SettingsStack
}, {
  tabBarOptions: { 
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: '#3a71cf',
    activeBackgroundColor: '#e52e7d',
    inactiveBackgroundColor: 'white',
 
      tabStyle:{
      width: '100%',
      height: '100%',
      borderTopColor: '#f5f5f5',
      borderTopWidth: 1,
      marginTop: 0,
      paddingTop: 2
      },

  }
});
