/**
 * Created by USER on 18/4/17.
 */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import Modal from 'react-native-modalbox';
import {Actions} from 'react-native-router-flux';
import QRCode from 'react-native-qrcode-svg';

const {width} = Dimensions.get('window');

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      color: '#000',
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

  cancel() {
    this.setState({
      isOpen: false
    });
  }

  changeStyle() {
    this.setState({
      isOpen: false
    });
    if (this.state.color === '#000') {
      this.setState({
        color: '#cb01fe'
      });
    } else if (this.state.color === '#cb01fe') {
      this.setState({
        color: '#017efe'
      });
    } else if (this.state.color === '#017efe') {
      this.setState({
        color: '#effe01'
      });
    } else {
      this.setState({
        color: '#000'
      });
    }
  }

  render() {
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
          <Text style={[styles.fontSize16, {flex: 1}]}>我的二维码</Text>
          <TouchableOpacity
            onPress={() => this.photo()}
          >
            <Text style={[styles.fontSize20, {width: 88}]}>。。。</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.qrCodeBlock}
        >
          <View style={styles.qrCodeWhite}>
            <View style={styles.qrCodeHeader}>
              <Image style={styles.qrCodeHeaderImage} source={information.avatar} />
              <View style={styles.qrCodeHeaderInformation}>
                <Text style={styles.qrCodeHeaderInformationName}>{information.name}</Text>
                <Text style={{fontSize: 12}}>{information.place}</Text>
              </View>
              <Text style={[styles.font, {color: information.sex === '男' ? '#01a8fe' : '#fa4ed3'}]}>&#xe666;</Text>
            </View>
            <View style={styles.qrCode}>
              <QRCode
                value="http://awesome.link.qr"
                size={(width * 0.9) - 80}
                logo={information.avatar}
                color={this.state.color}
              />
            </View>
            <View>
              <Text style={styles.qrCodeFooter}>扫一扫上面的二维码图案，加我好友</Text>
            </View>
          </View>
        </View>
        <Modal
          style={[styles.modal4]}
          position="bottom"
          swipeArea={20}
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({isOpen: false})}
        >
          <TouchableOpacity
            style={styles.oneAvatarBlock}
            onPress={() => this.changeStyle()}
          >
            <Text style={styles.oneAvatarWay}>换个样式</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneAvatarBlock}>
            <Text
              style={styles.oneAvatarWay}
            >
              保存图片
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneAvatarBlock}>
            <Text style={styles.oneAvatarWay}>扫描二维码</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.oneAvatarBlock, {marginBottom: 5}]}>
            <Text style={styles.oneAvatarWay}>重置二维码</Text>
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
export default connect(select)(QrCode);

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
  font: {
    fontFamily: 'cloud',
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 3
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
  qrCodeBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrCodeWhite: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 2,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
  },
  qrCodeHeader: {
    flexDirection: 'row'
  },
  qrCodeHeaderImage: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  qrCodeHeaderInformation: {
    marginLeft: 8,
  },
  qrCode: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
  },
  qrCodeHeaderInformationName: {
    height: 30,
    color: '#000',
    fontSize: 16
  },
  qrCodeFooter: {
    textAlign: 'center',
    fontSize: 12
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
