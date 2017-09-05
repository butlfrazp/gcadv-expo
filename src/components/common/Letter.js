import React from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';

const Letter = (props) => {

  splitWord = () => {
    const wordLength = props.name.length;

    var firstLetter = props.name.slice(0,1);
    var ending = props.name.slice(1, wordLength);

    const {
      container,
      firstLetterStyle,
      endingStyle
    } = styles

    return (
      <View style={container}>
        <View>
          <Text style={[firstLetterStyle, props.firstFontSize]}>{firstLetter}</Text>
        </View>
        <View style={{justifyContent: 'flex-end', paddingBottom: 2.5}}>
          <Text style={[endingStyle, props.secondFontSize]}>{ending}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      {this.splitWord()}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
  },
  firstLetterStyle: {
    fontSize: 28,
    color: '#fff',
    alignSelf: 'flex-end',
    fontFamily: 'Avenir Next'
  },
  endingStyle: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Avenir Next'
  }
}

export { Letter };
