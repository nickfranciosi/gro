/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import CommunityScreen from '../screens/CommunityScreen';
import AddScreen from '../screens/AddScreen';
import PlantsScreen from '../screens/PlantsScreen';

export default TabNavigator(
  {
    Community: {
      screen: CommunityScreen,
    },
    Add: {
      screen: AddScreen,
    },
    Plants: {
      screen: PlantsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Community':
            iconName = 'circle';
            break;
          case 'Add':
            iconName = 'plus-circle';
            break;
          case 'Plants':
            iconName = 'circle';
        }
        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      showLabel: true,
    },
  }
);
