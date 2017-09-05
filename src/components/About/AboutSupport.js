import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Seperator
} from './../common'

const AboutSupport = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Our Mission</Text>
      <Seperator />
      <Text style={{...styles.textStyle, ...{fontWeight: '500', textAlign: 'center'}}}>Collaborate. Advocate. Educate. Empower.</Text>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text style={styles.textStyle}>  We <Text style={styles.textEmphStyle}>empower</Text> survivors and
          the programs that serve them, we <Text style={styles.textEmphStyle}>educate </Text>
          the public, and we <Text style={styles.textEmphStyle}>advocate </Text>
          for responsive public policy.  Our strength is in numbers, as we
          <Text style={styles.textEmphStyle}> collaborate</Text> throughout
          Georgia to stop domestic violence.
        </Text>
      </View>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    color: '#9B9B9B'
  },
  textEmphStyle: {
    fontWeight: '600'
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 15,
    color: '#9B9B9B',
    fontFamily: 'Avenir Next',
    fontWeight: '600'
  }
}

export default AboutSupport
