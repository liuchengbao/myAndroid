// import React, {Component} from 'react';
// import {
//   View,
//   Dimensions,
//   Text,
//   FlatList,
//   RefreshControl,
// } from 'react-native';
//
// const {width} = Dimensions.get('window');
//
//
// export default class TestListPage2 extends Component {
//   constructor(props) { // 构造函数
//     super(props);
//
//     this.state = {
//       refreshing: false,
//       isLoreMoreing: 'LoreMoreing',
//       dataSource: [],
//
//     };
//     this.responseData = [];
//   }
//
//
//   componentDidMount() {
//     // this.Refresh();
//     // 模拟请求后台返回的数据
//
//   }
//
//
//   Refresh = () => {
//     console.log('jjjjjjjjj')
//     this.setState({
//       refreshing: true,
//     });
//
//
//     setTimeout(() => {
//       // 默认选中第二个
//       this.responseData = [
//         {id: 100}, {id: 101}, {id: 102}, {id: 103}, {id: 104}
//       ];
//       this.setState({
//         refreshing: false,
//         dataSource: this.responseData
//       });
//       this.isLoreMore = false;
//     }, 2000);
//   };
//
//   isLoreMore = false;
//   LoreMore = () => {
//     console.log('tafengkuang');
//
//     if (this.isLoreMore === false) {
//       this.setState({
//         isLoreMoreing: 'LoreMoreing',
//       });
//
//       this.isLoreMore = true;
//       this.responseData = this.responseData.concat({id: '加载的新数据'});
//       setTimeout(() => {
//         this.setState({
//           dataSource: this.responseData,
//         });
//       }, 500);
//
//       setTimeout(() => {
//         this.setState({
//           isLoreMoreing: 'LoreMoreEmpty'
//         });
//       }, 500);
//     }
//   };
//   renderRow = (item) => {
//     const rowData = item.item;
//     return (
//       <View style={{
//           height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
//        }}
//       >
//         <Text>{rowData.id}</Text>
//       </View>
//     );
//   };
//
//   renderSeparator = () => <View style={{height: 1, backgroundColor: 'rgb(200,200,200)'}}/>;
//
//
//   renderHeader = () => (
//     <View
//       style={{
//         height: 44,
//         width,
//         justifyContent: 'center',
//         backgroundColor: 'red',
//         alignItems: 'center'
//         }}
//       activeOpacity={1}
//     >
//       <Text>
//         {'我是头部'}
//       </Text>
//     </View>
//   );
//   renderFooter = () => {
//     if (this.state.dataSource.length !== 0 && this.state.isLoreMoreing === 'LoreMoreing') {
//       return (
//         <View style={{
//                     height: 44,
//                     backgroundColor: 'rgb(200,200,200)',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//         >
//           <Text>
//             {'正在加载....'}
//           </Text>
//         </View>
//       );
//     } else if (this.state.isLoreMoreing === 'LoreMoreEmpty') {
//       return (
//         <View style={{
//                     height: 44,
//                     backgroundColor: 'rgb(200,200,200)',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//         >
//           <Text>
//             {'暂无更多'}
//           </Text>
//         </View>
//       );
//     }
//     return null;
//   };
//
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={{
//                     marginTop: 20,
//                     height: 44,
//                     width,
//                     justifyContent: 'center',
//                     backgroundColor: 'gray',
//                     alignItems: 'center',
//                     flexDirection: 'row'
//                 }}
//         >
//           <Text onPress={this.Refresh}>
//             {'点击刷新'}
//           </Text>
//
//           <Text onPress={() => {
//                         this.flatList.scrollToIndex({viewPosition: 0, index: 4});
//                     }}
//           >
//             {'点击滚动到第4个'}
//           </Text>
//
//
//         </View>
//         <FlatList
//           showsVerticalScrollIndicator={false} // 是否显示垂直滚动条
//           showsHorizontalScrollIndicator={false} // 是否显示水平滚动条
//           numColumns={1} // 每行显示1个
//           ref={(flatList) => { this.flatList = flatList; }}
//           ListHeaderComponent={this.renderHeader} // 头部
//           ListFooterComponent={this.renderFooter} // 尾巴
//           renderItem={this.renderRow} // 每行显示一项
//           ItemSeparatorComponent={this.renderSeparator} // 每行底部---一般写下划线
//           enableEmptySections // 数据可以为空
//           keyExtractor={(item, index) => item.key === index}
//           onEndReachedThreshold={0.1} // 执行上啦的时候10%执行
//           onEndReached={this.LoreMore}
//           data={this.state.dataSource}
//           refreshControl={
//             <RefreshControl
//               refreshing={this.state.refreshing}
//               onRefresh={this.Refresh}
//               title="Loading..."
//             />
//           }
//         />
//       </View>
//     );
//   }
// }

//
// import React, {Component} from 'react';
// import Button from 'react-native-button';
// import Modal from 'react-native-modalbox';
// import Slider from 'react-native-slider';
//
// import {
//   Text,
//   StyleSheet,
//   ScrollView,
//   View,
//   Dimensions,
//   TextInput
// } from 'react-native';
//
// var screen = Dimensions.get('window');
//
// export default class Example extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false,
//       isDisabled: false,
//       swipeToClose: true,
//       sliderValue: 0.3
//     };
//   }
//
//   onClose() {
//     console.log('Modal just closed');
//   }
//
//   onOpen() {
//     console.log('Modal just openned');
//   }
//
//   onClosingState(state) {
//     console.log('the open/close of the swipeToClose just changed');
//   }
//
//   renderList() {
//     var list = [];
//
//     for (var i=0;i<50;i++) {
//       list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
//     }
//
//     return list;
//   }
//
//   render() {
//     var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[
// styles.btn, styles.btnModal]}>X</Button>;
//
//     return (
//       <View style={styles.wrapper}>
//         <Button onPress={() => this.refs.modal1.open()} style={styles.btn}>Basic modal</Button>
//         <Button onPress={() => this.refs.modal2.open()} style={styles.btn}>Position top</Button>
//         <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>
// Position centered + backdrop + disable</Button>
//         <Button onPress={() => this.refs.modal4.open()} style={styles.btn}>
// Position bottom + backdrop + slider</Button>
//         <Button onPress={() => this.setState({isOpen: true})} style={styles.btn}>
// Backdrop + backdropContent</Button>
//         <Button onPress={() => this.refs.modal6.open()} style={styles.btn}>
// Position bottom + ScrollView</Button>
//         <Button onPress={() => this.refs.modal7.open()} style={styles.btn}>
// Modal with keyboard support</Button>
//
//         <Modal
//           style={[styles.modal, styles.modal1]}
//           ref={"modal1"}
//           swipeToClose={this.state.swipeToClose}
//           onClosed={this.onClose}
//           onOpened={this.onOpen}
//           onClosingState={this.onClosingState}>
//           <Text style={styles.text}>Basic modal</Text>
//           <Button onPress={() => this.setState({
// swipeToClose: !this.state.swipeToClose})}
// style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
//         </Modal>
//
//         <Modal style={[styles.modal, styles.modal2]}
// backdrop={false}  position={"top"}
// ref={"modal2"}>
//           <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
//         </Modal>
//
//         <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}
// isDisabled={this.state.isDisabled}>
//           <Text style={styles.text}>Modal centered</Text>
//           <Button onPress={() => this.setState({isDisabled: !this.state.isDisabled})}
// style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
//         </Modal>
//
//         <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
//           <Text style={styles.text}>Modal on bottom with backdrop</Text>
//           <Slider style={{width: 200}} value={
// this.state.sliderValue} onValueChange={(value) =>
// this.setState({sliderValue: value})} />
//         </Modal>
//
//         <Modal isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})}
// style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
//           <Text style={styles.text}>Modal with backdrop content</Text>
//         </Modal>
//
//         <Modal style={[styles.modal, styles.modal4]} position={"bottom"}
// ref={"modal6"}
// swipeArea={20}>
//           <ScrollView>
//             <View style={{width: screen.width, paddingLeft: 10}}>
//               {this.renderList()}
//             </View>
//           </ScrollView>
//         </Modal>
//
//         <Modal ref={"modal7"} style={[styles.modal, styles.modal4]} position={"center"}>
//           <View>
//             <TextInput style={{height: 50, width: 200, backgroundColor: '#DDDDDD'}}/>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
//
// }
//
// const styles = StyleSheet.create({
//
//   wrapper: {
//     paddingTop: 50,
//     flex: 1
//   },
//
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//
//   modal2: {
//     height: 230,
//     backgroundColor: "#3B5998"
//   },
//
//   modal3: {
//     height: 300,
//     width: 300
//   },
//
//   modal4: {
//     height: 300
//   },
//
//   btn: {
//     margin: 10,
//     backgroundColor: "#3B5998",
//     color: "white",
//     padding: 10
//   },
//
//   btnModal: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     width: 50,
//     height: 50,
//     backgroundColor: "transparent"
//   },
//
//   text: {
//     color: "black",
//     fontSize: 22
//   }
//
// });

//
// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   Image
// } from 'react-native';
//
// import ImagePicker from 'react-native-image-picker';
//
// export default class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       avatarSource: {
//         uri: 'http://facebook.github.io/react/img/logo_og.png'
//       }
//     };
//   }
//
//   clickAvatar() {
//     const photoOptions = {
//       // 底部弹出框选项
//       title: '请选择',
//       cancelButtonTitle: '取消',
//       takePhotoButtonTitle: '拍照',
//       chooseFromLibraryButtonTitle: '选择相册',
//       quality: 0.75,
//       allowsEditing: true,
//       noData: false,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//
//     console.log(ImagePicker, 'ffssss');
//     ImagePicker.showImagePicker(photoOptions, (response) => {
//       console.log('Response = ', response);
//
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         // let source = { uri: response.uri};
//         console.log(response.uri, '去冒险00');
//
//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
//         this.setState({
//           avatarSource: {
//             uri: response.uri
//           }
//         });
//       }
//     });
//   }
//   clickLibrary() {
//     const photoOptions = {
//       // 底部弹出框选项
//       title: '请选择',
//       cancelButtonTitle: '取消',
//       takePhotoButtonTitle: '拍照',
//       chooseFromLibraryButtonTitle: '选择相册',
//       quality: 0.75,
//       allowsEditing: true,
//       noData: false,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//
//     console.log(ImagePicker, 'ffssss');
//     ImagePicker.launchImageLibrary(photoOptions, (response) => {
//       console.log('Response = ', response);
//
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         // let source = { uri: response.uri};
//         console.log(response.uri, '去冒险00');
//
//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
//         this.setState({
//           avatarSource: {
//             uri: response.uri
//           }
//         });
//       }
//     });
//   }
//
//   onFileUpload() {
//
//   }
//
//   clickCamera() {
//     const photoOptions = {
//       // 底部弹出框选项
//       title: '请选择',
//       cancelButtonTitle: '取消',
//       takePhotoButtonTitle: '拍照',
//       chooseFromLibraryButtonTitle: '选择相册',
//       quality: 0.75,
//       allowsEditing: true,
//       noData: false,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//
//     console.log(ImagePicker, 'ffssss');
//     ImagePicker.launchCamera(photoOptions, (response) => {
//       console.log('Response = ', response);
//
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         // let source = { uri: response.uri};
//         console.log(response.uri, '去冒险');
//
//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
//         this.setState({
//           avatarSource: {
//             uri: response.uri
//           }
//         });
//       }
//     });
//   }
//
//
//   render() {
//     return (
//       <View>
//         <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar()}>头像</Text>
//         <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickLibrary()}>
// 相册中选择</Text>
//         <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickCamera()}>拍照</Text>
//         <Image style={{width: 200, height: 200}} source={{uri: this.state.avatarSource.uri}} />
//       </View>
//     );
//   }
// }


import React, {Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: {
        uri: 'http://facebook.github.io/react/img/logo_og.png'
      }
    };
  }
  clickAvatar1() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      console.log(image);
    }).catch();
  }

  clickAvatar2() {
    ImagePicker.openPicker({
      multiple: true,
      cropping: true
    }).then((image) => {
      console.log(image);
    }).catch();
  }

  clickAvatar3() {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then((video) => {
      console.log(video);
    }).catch();
  }

  clickAvatar4() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      console.log(image);
    }).catch();
  }

  clickAvatar5() {
    ImagePicker.openCropper({
      path: 'my-file-path.jpg',
      width: 300,
      height: 400
    }).then((image) => {
      console.log(image);
    }).catch();
  }

  clear() {
    ImagePicker.clean().then(() => {
      console.log('removed all tmp images from tmp directory');
    }).catch((e) => {
      alert(e);
    });
  }


  render() {
    return (
      <View>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar1()}>
          用裁剪调用单个图像选择器
        </Text>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar2()}>
          调用多个图像选择器
        </Text>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar3()}>
          只从图库中选择视频
        </Text>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar4()}>
          从相机中选择
        </Text>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clickAvatar5()}>作物图片</Text>
        <Text style={{height: 100, borderWidth: 1}} onPress={() => this.clear()}>清除</Text>

        <Image style={{width: 200, height: 200}} source={{uri: this.state.avatarSource.uri}} />
      </View>
    );
  }
}

