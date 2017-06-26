import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const TouchableAction = ({
  action,
  children,
  iconName,
  style,
}) => (
  <TouchableOpacity
    onPress={action}
  >
    <View style={[styles.row, styles.base, style]}>
      {iconName &&
        <FontAwesome
          name="circle"
          size={20}
          style={styles.icon}
          color={Colors.tabIconDefault}
        />
      }
      <Text style={styles.icon}>{children}</Text>
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  base: {
    alignItems: "center",
  },
  icon: {
    marginRight: 4,
  },
  text: {
    color: Colors.mainText,
  },
  row: {
    flexDirection: 'row',
  },
});

export default TouchableAction;
