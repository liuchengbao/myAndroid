/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  BackHandler,
  ToastAndroid
} from 'react-native';
import {
  Router,
  Scene,
  Stack,
  Actions,
  Lightbox,
  Tabs,
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {Provider} from 'react-redux';
import store from './app/reducers/store';
import Miner from './app/pages/miner/miner';
import UserInfos from './app/pages/userInfo/userInfo';
import Staring from './app/pages/starting/starting';
import Login from './app/pages/login/login';
import Contact from './app/pages/contact/contact';
import SingleContact from './app/components/chart_box';
import Person from './app/pages/person/person';
import TabIcon from './app/components/tabIcon';
import Setting from './app/pages/userInfo/setting';
import AboutMe from './app/pages/userInfo/about_me';
import Avatar from './app/pages/userInfo/avatar';
import Name from './app/pages/userInfo/name';
import QrCode from './app/pages/userInfo/qr_code';
import MoreInformation from './app/pages/userInfo/more_information';
import Gender from './app/pages/userInfo/gender';

console.disableYellowBox = true;

const onBackPress = () => { // 安卓返回按钮
  const mainRoute = ['login', 'starting', 'Home', 'Register', 'User'];
  if (mainRoute.indexOf(Actions.currentScene) !== -1) {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      // 退出APP之前清空顶层modal的sence场景
      Actions.LoginModal({type: 'reset'});
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再次点击退出程序', 1500);
  } else {
    Actions.pop();
  }
  return true;
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          backAndroidHandler={onBackPress}
        >
          <Lightbox
            hideNavBar
            transitionConfig={
              () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
            }
          >
            <Stack
              key="root"
              headerMode="screen"
              hideNavBar
              transitionConfig={
                () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
              }
            >
              {/*<Stack*/}
                {/*key="LoginModal"*/}
                {/*initial*/}
              {/*>*/}
                {/*<Scene*/}
                  {/*key="starting"*/}
                  {/*component={Staring}*/}
                  {/*hideNavBar*/}
                {/*/>*/}
                {/*<Scene*/}
                  {/*title="登录"*/}
                  {/*key="login"*/}
                  {/*component={Login}*/}
                  {/*hideNavBar*/}
                {/*/>*/}
              {/*</Stack>*/}
              <Tabs
                key="tabbar" // 唯一标识
                lazy // 是否默认渲染tabbar
                tabBarPosition="bottom" // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                icon={TabIcon}
                activeBackgroundColor="white" // 选中tabbar的背景色
                inactiveBackgroundColor="white" // 未选中tabbar的背景色
                activeTintColor="#841584" // 选中tabbar图标的颜色
                inactiveTintColor="#aaa" // 未选中tabbar图标的颜色
              >
                <Stack
                  key="tab_1"
                  title="home"
                  iconName="home"
                  tabBarLabel="消息"
                  transitionConfig={
                    () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
                  }
                >
                  <Scene
                    key="Home"
                    title="首页"
                    hideNavBar
                    component={Contact}
                  />
                  <Scene
                    key="chatBox"
                    title="消息"
                    hideTabBar
                    component={SingleContact}
                    swipeEnabled={false}
                  />
                </Stack>
                <Stack
                  key="tab_4"
                  title="contact"
                  iconName="user"
                  tabBarLabel="联系人"
                  transitionConfig={
                     () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
                  }
                >
                  <Scene
                    key="Register"
                    title="联系人"
                    hideNavBar
                    component={Person}
                    initial
                  />
                </Stack>
                <Stack
                  key="tab_2"
                  title="music"
                  iconName="music"
                  tabBarLabel="动态"
                  transitionConfig={
                    () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
                  }
                >
                  <Scene
                    key="Register"
                    title="订单"
                    hideNavBar
                    component={Miner}
                  />
                </Stack>
                <Stack
                  key="tab_3"
                  title="user"
                  iconName="user"
                  tabBarLabel="我"
                  initial
                  transitionConfig={
                    () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})
                  }
                >
                  <Scene
                    key="User"
                    title="我"
                    hideNavBar
                    component={UserInfos}
                  />
                  <Scene
                    key="aboutMe"
                    title="关于我"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={AboutMe}
                  />
                  <Scene
                    key="setting"
                    title="设置"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={Setting}
                  />
                  <Scene
                    key="avatar"
                    title="头像"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={Avatar}
                  />
                  <Scene
                    key="name"
                    title="名字"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={Name}
                  />
                  <Scene
                    key="qrCode"
                    title="二维码"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={QrCode}
                  />
                  <Scene
                    key="moreInformation"
                    title="更多"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={MoreInformation}
                  />
                  <Scene
                    key="gender"
                    title="性别"
                    hideNavBar
                    hideTabBar
                    swipeEnabled={false}
                    component={Gender}
                  />
                </Stack>
              </Tabs>
            </Stack>
          </Lightbox>
        </Router>
      </Provider>
    );
  }
}
