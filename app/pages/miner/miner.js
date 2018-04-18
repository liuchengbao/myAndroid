/**
 * Created by USER on 18/3/9.
 */
import React, {Component} from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  View
} from 'react-native';
import shortid from 'shortid';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    const anim = [1, 2, 3].map(() => new Animated.Value(0));
    this.state = {
      anim
    };
  }

  componentDidMount() {
    const {timing} = Animated;

    Animated.sequence([
      Animated.stagger(200, this.state.anim.map(left => timing(left, {toValue: 1}))
        .concat(this.state.anim.map(left => timing(left, {toValue: 0})))),
      Animated.delay(400),
      timing(this.state.anim[0], {
        toValue: 1
      }),
      timing(this.state.anim[1], {
        toValue: -1
      }),
      timing(this.state.anim[2], {
        toValue: 0.5
      }),
      Animated.delay(400),
      Animated.parallel(this.state.anim.map(anim =>
        timing(anim, {
          toValue: 0
        })))
    ]).start(); // 开始执行动画
  }

  render() {
    const views = this.state.anim.map(function (value) {
      return (
        <Animated.View
          key={shortid.generate()}
          style={[styles.demo, {
                        left: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200]
                        })
                    }]}
        >
          <Text style={styles.iconStyle}>&#xe64a;</Text>
        </Animated.View>
      );
    });

    return (
      <View style={styles.container}>
        <Text>sequence/delay/stagger/parallerl 演示</Text>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  demo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  iconStyle: {
    fontFamily: 'cloud',
    fontSize: 30
  }
});
