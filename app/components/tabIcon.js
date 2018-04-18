/**
 * Created by USER on 18/4/9.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabIcon extends Component {
  render() {
    return (
      <View style={{
          flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center'
      }}
      >
        <Icon color={this.props.tintColor} name={this.props.iconName} size={30} />
      </View>
    );
  }
}
