import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

import TouchableAction from "../TouchableAction";
import BulletList from "../BulletList";
import Colors from '../../constants/Colors';

export default class NewsCard extends React.Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={[styles.header, styles.innerContent, styles.row]}>
          <View style={[styles.row, styles.headerInfo]}>
            <Image
              style={styles.avatar}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
             />
            <BulletList items={["Nick F.", "Nashville, TN"]} />
           </View>
           <EvilIcons
             name="chevron-down"
             size={32}
             color={Colors.mainText}
           />
        </View>
        <View style={[styles.description, styles.innerContent]}>
          <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt provident obcaecati, sit laboriosam architecto fuga, consequatur neque facilis ipsum minus labore dolor explicabo animi adipisci aperiam doloremque eum incidunt mollitia!</Text>
        </View>
        <Image
          style={styles.bodyImage}
          source={{uri: 'http://jacksoncountymga.org/wp-content/uploads/2017/02/Learn-1.jpg'}}
        />
        <View style={styles.footerWrapper}>
          <View style={[styles.innerContent, styles.row, styles.footerContent]}>
            <View style={[styles.actions, styles.row]}>
              <TouchableAction style={styles.action} iconName="circle">Thanks</TouchableAction>
              <TouchableAction style={styles.action} iconName="circle">Reply</TouchableAction>
            </View>
            <Text style={[styles.bodyText, styles.time]}>2 hours ago</Text>
          </View>
        </View>
      </View>
    );
  }
}

const imageSize = 25;
const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: Colors.cardBackground,
    marginBottom: 8,
  },
  innerContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginRight: 16,
  },
  bodyImage: {
    width: "100%",
    height: 200,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  headerInfo: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: Colors.mainText,
    fontWeight: 'bold',
  },
  bodyText: {
    color: Colors.mainText,
    fontSize: 14,
  },
  description: {
    paddingBottom: 16,
  },
  footerWrapper: {
    borderTopWidth: 1,
    borderTopColor: Colors.containerBackground,
  },
  footerContent: {
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: "center",
  },
  action: {
    marginRight: 8,
  },
  time: {
    fontSize: 12,
  },
});
