import React from 'react';
import { Animated } from 'react-native';
import { AppLoading } from 'expo';
import { Scene, Router } from 'react-native-router-flux';
import About from './About/About';
import Home from './Home';
import Donate from './Donate'
import Event from './Event'
import Login from './Login'
import Chat from './Chat';
import PerformerPage from './PerformerPage';
import Training from './Training';
import OnBoarding from './OnBoarding';
import SignUp from './SignUp';
import { connect } from 'react-redux';

const RouterComponent = (props) => {

  animation = () => {
    this.opacity = new Animated.Value(0);
    Animated.timing(this.opacity, {
      toValue: 1,
      timing: 1000
    }).start();
  }

  return (
    <Router>
      <Scene
        hideNavBar={true}
        key="loading"
        initial
        component={AppLoading}
      />

      <Scene hideNavBar={true} key="onboarding">
        <Scene
          key="onBoarding"
          component={ OnBoarding }
        />
        <Scene
          key="login"
          animation="fade"
          component={ Login }
        />
        <Scene
          key="signUp"
          animation="fade"
          component={ SignUp }
        />
      </Scene>

      <Scene key="main" direction="horizontal" duration={ 1000 }>
        <Scene
          key="home"
          component={ Home }
          hideNavBar={true}
          passProps={true}
          buttonStyle={props.buttonStyle}
          onPress={props.onTogglePress}
          initial
        />

        <Scene
          key="event"
          component={ Event }
          hideNavBar={true}
          passProps={true}
          onPress={props.onBackPressed}
          buttonStyle={props.buttonStyle}
        />

        <Scene
          key="performer"
          component={ PerformerPage }
          hideNavBar={ true }
          passProps={ true }
          onPress={ props.onBackPressed }
          buttonStyle={props.buttonStyle}
        />

        <Scene
          key="about"
          component={ About }
          hideNavBar={true}
          passProps={true}
          onPress={props.onTogglePress}
          buttonStyle={props.buttonStyle}
        />

        <Scene
          component={ Chat }
          key="chat"
          hideNavBar={ true }
        />

        <Scene
          component={ Training }
          key="training"
          hideNavBar={ true }
          passProps={true}
          onPress={props.onTogglePress}
          buttonStyle={props.buttonStyle}
        />

        <Scene
          key="donate"
          component={ Donate }
          hideNavBar={true}
          passProps={true}
          onPress={props.onBackPressed}
        />
      </Scene>
    </Router>
  )
}

mapStateToProps = state => {
  const { userBool } = state.login;
  return { userBool };
}

export default connect(mapStateToProps)(RouterComponent);
