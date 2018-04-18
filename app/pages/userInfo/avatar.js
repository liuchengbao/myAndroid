/**
 * Created by USER on 18/4/11.
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Modal from 'react-native-modalbox';

import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
import {changeAvatar} from '../../reduxActions/personalInformationAction';

const {width} = Dimensions.get('window');

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  // componentWillMount() {
  //   this.props.dispatch(getInformation());
  // }
  //
  // componentDidMount(){
  //   this.props.dispatch(getInformation());
  // }

  goBack() {
    Actions.pop();
  }

  photo() {
    this.setState({
      isOpen: true
    });
  }

  openCamrea(information) {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      const informationData = information;
      informationData.avatar = {uri: image.path};
      this.props.dispatch(changeAvatar(informationData));
      this.setState({
        isOpen: false
      });
    }).catch();
  }

  openLibrary(information) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      const informationData = information;
      informationData.avatar = {uri: image.path};
      this.props.dispatch(changeAvatar(informationData));
      this.setState({
        isOpen: false
      });
    }).catch();
  }

  cancel() {
    this.setState({
      isOpen: false
    });
  }
  render() {
    console.log(this.props, '怎么会爱上了他，并决定跟他回家');
    const {information} = this.props.getPersonalInformation;
    return (
      <View style={styles.container}>
        <View style={styles.avatarHeader}>
          <TouchableOpacity
            style={styles.goBackBlock}
            onPress={() => this.goBack()}
          >
            <Text style={[styles.leftArrow]}>&#xe64a;</Text>
            <Text style={[styles.fontSize16]}>个人信息</Text>
          </TouchableOpacity>
          <Text style={[styles.fontSize16, {flex: 1}]}>个人头像</Text>
          <TouchableOpacity
            onPress={() => this.photo()}
          >
            <Text style={[styles.fontSize20, {width: 88}]}>。。。</Text>
          </TouchableOpacity>
        </View>
        <Image source={information.avatar} style={styles.avatar} />
        <Modal
          style={[styles.modal4]}
          position="bottom"
          swipeArea={20}
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}
        >
          <TouchableOpacity
            style={styles.oneAvatarBlock}
            onPress={() => this.openCamrea(information)}
          >
            <Text style={styles.oneAvatarWay}>拍照</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneAvatarBlock}>
            <Text
              style={styles.oneAvatarWay}
              onPress={() => this.openLibrary(information)}
            >
              从手机相册中选择
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneAvatarBlock}>
            <Text style={styles.oneAvatarWay}>查看上一张头像</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneAvatarBlock, {marginBottom: 5}]}>
            <Text style={styles.oneAvatarWay}>保存头像</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.oneAvatarBlock, {
              flex: 1, justifyContent: 'center', alignItems: 'center'
            }]}
            onPress={() => this.cancel()}
          >
            <Text style={styles.oneAvatarWay}>取消</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

function select(state) {
  return {
    getPersonalInformation: state.getPersonalInformation
  };
}
export default connect(select)(Avatar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  avatar: {
    width,
    height: width
  },
  avatarHeader: {
    flexDirection: 'row',
    backgroundColor: '#161717',
    paddingTop: 10,
    paddingRight: 7,
    paddingBottom: 10,
    paddingLeft: 7,
  },
  goBackBlock: {
    width: 88,
    flexDirection: 'row'
  },
  leftArrow: {
    fontFamily: 'cloud',
    fontSize: 20,
    color: '#FFF',
    lineHeight: 20
  },
  fontSize16: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20
  },
  fontSize20: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'right',
    lineHeight: 20
  },
  modal4: {
    height: 300,
    backgroundColor: '#ddd'
  },
  oneAvatarBlock: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
    paddingTop: 14,
    paddingBottom: 14,
  },
  oneAvatarWay: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16
  }
});
