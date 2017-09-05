import React from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { WebBrowser } from 'expo';
import Communications from 'react-native-communications';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Modal = (props) => {

  renderTitle = () => {
    return props.info ? props.info.title : "Header"
  }

  renderBody = () => {
    return props.info ? props.info.description : "Body"
  }

  renderLink = () => {
    if (props.info) {
      return props.info.link ? props.info.link.title : ""
    }
  }

  onButtonPressed = () => {
    if (props.info) {
      if (props.info.link) {
        switch(props.info.link.title) {
          case "Phone":
            Communications.phonecall(props.info.link.link, true)
            break;
          case "Website":
            this.openBrowser(props.info.link.link)
            break;
          default:
            return
        }
      }
    }
  }

  openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url)
  }

  return (
    <Animated.View style={[ styles.animatedContianer, props.style ]}>
      <Animated.View style={[styles.container, props.opacity]}>
        <View style={styles.modalHeader}>
          <View style={styles.modalHeaderLeft}>
            <TouchableOpacity onPress={props.exitPressed}>
              <Text style={styles.modalHeaderLeftText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalHeaderCenter}>
            <Text style={styles.modalHeaderCenterText}>{this.renderTitle()}</Text>
          </View>
          <View style={styles.modalHeaderRight}>
            <TouchableOpacity onPress={ this.onButtonPressed.bind(this) }>
              <Text style={styles.modalHeaderRightText}>{this.renderLink()}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={ styles.modalBody }>
          <Text style={ styles.modalBodyText }>   {this.renderBody()}</Text>
        </View>
      </Animated.View>
      <View style={styles.overlay}></View>
    </Animated.View>
  )
};

const styles = {
  animatedContianer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 20
  },
  container: {
    width: 250,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4A4A4A',
    zIndex: 999,
    borderRadius: 5
  },
  overlay: {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#f8f8f8',
    zIndex: 998,
    opacity: 0.5
  },
  modalHeader: {
    height: 60,
    backgroundColor: '#4A4A4A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderLeft: {
    flex: 1
  },
  modalHeaderCenter: {
    flex: 2
  },
  modalHeaderRight: {
    flex: 1
  },
  modalHeaderLeftText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 14,
    paddingLeft: 5
  },
  modalHeaderCenterText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 18,
    textAlign: 'center'
  },
  modalHeaderRightText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 14,
    paddingRight: 5,
    textAlign: 'right'
  },
  modalBody: {
    margin: 10
  },
  modalBodyText: {
    fontFamily: 'Avenir Next',
    fontSize: 14
  }
}

export { Modal };
