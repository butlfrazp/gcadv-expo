import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  PanResponder,
  Animated,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { setPage } from './../actions';
import { Actions } from 'react-native-router-flux';
import Login from './Login';
import OnBoardMain from './OnBoardMain';
import FacebookLogin from './FacebookLogin'
import LoginSignUp from './LoginSignUp';
import {
  ErrorModal
} from './common';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (event, gesture) => {
        if (Math.abs(gesture.dx) > 50) {
          return true;
        }
        return false;
      },
      onMoveShouldSetResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove:(event, gesture) => {
        if (this.props.page == 0) {
          if (gesture.dx < 0) {
            this.position.setValue({ x: gesture.dx, y: 0 });
          }
        }else if (this.props.page == 2) {
          if (gesture.dx > 0) {
            this.position.setValue({ x: gesture.dx, y: 0 });
          }
        }else{
          this.position.setValue({ x: gesture.dx, y: 0 });
        }

      },
      onPanResponderGrant: (event, gesture) => {
        this.position.setOffset({ x: this.position.x._value, y: this.position.y._value})
        this.position.setValue({ x: 0, y: 0})
      },
      onPanResponderRelease: (event, gesture) => {
        this.position.flattenOffset();
        if (Math.abs(this.position.x._value) > 10) {
          if (gesture.dx > 50) {
            if (this.props.page > 0) {
              this.changePage(-1);
            }
          }else if (gesture.dx < -50) {
            if (this.props.page < 2) {
              this.changePage(1);
            }
          }else{
            this.springBack();
          }
        }else{
          this.springBack();
        }
      }
    });

    this.state = { panResponder };
  }

  changePage = (num) => {
    this.props.setPage(num);
    Animated.spring(this.position, {
      toValue: {x: -SCREEN_WIDTH * (this.props.page + num), y: 0},
      tension: 30
    }).start();

  }

  springBack = () => {
    Animated.spring(this.position, {
      toValue: {x: -SCREEN_WIDTH * this.props.page, y: 0},
      tension: 40
    }).start();
  }

  fillButton1 = () => {
    return this.props.page === 0 ? 'white' : 'transparent'
  }

  fillButton2 = () => {
    return this.props.page === 1 ? 'white' : 'transparent'
  }

  fillButton3 = () => {
    return this.props.page === 2 ? 'white' : 'transparent'
  }

  render() {
    return  (
      <View style={{flex: 1}}>
        <Animated.View
          {...this.state.panResponder.panHandlers}
          style={{...styles.container, ...this.position.getLayout() }}
        >
          <StatusBar
            hidden={true}
          />
          <View style={styles.screen1}>
            <OnBoardMain />
          </View>
          <View style={styles.screen2}>
            <FacebookLogin />
          </View>
          <View style={styles.screen3}>
            <LoginSignUp />
          </View>
        </Animated.View>
        <View style={styles.navButtonContainer}>
          <View style={[styles.navButton, {backgroundColor: this.fillButton1()}]}></View>
          <View style={[styles.navButton, {backgroundColor: this.fillButton2()}]}></View>
          <View style={[styles.navButton, {backgroundColor: this.fillButton3()}]}></View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
  },
  screen1: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    left: 0
  },
  screen2: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    left: SCREEN_WIDTH
  },
  screen3: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    left: 2 * SCREEN_WIDTH
  },
  navButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 80,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navButton: {
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 2.5,
    borderColor: 'white',
    borderWidth: 1,
  }
}

const mapStateToProps = state => {
  const { page } = state.login;
  return { page };
};

export default connect(mapStateToProps, { setPage })(OnBoarding);
