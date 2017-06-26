import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const BulletList = ({items = []}) => {
  return (
    <View style={styles.base}>
      {items.map((item, index) => {
        if(index < (items.length - 1)) {
          return <View
                    key={index}
                    style={styles.base}
                  >
                    <Text style={styles.text}>{item}</Text>
                    <FontAwesome
                      name="circle"
                      size={8}
                      style={styles.spacer}
                      color={Colors.mainText}
                    />
                </View>
        }
        return <Text key={index} style={styles.text}>{item}</Text>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    marginRight: 8,
    marginLeft: 8,
  },
  text: {
    color: Colors.mainText,
    fontWeight: 'bold',
  },
});

BulletList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default BulletList;
