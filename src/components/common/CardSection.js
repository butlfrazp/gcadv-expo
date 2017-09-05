import React from 'react';
import { View, Dimensions } from 'react-native';

const CARD_SECTION_HEIGHT = Dimensions.get('window').height * .15;

const CardSection = (props) => {
  return (
    <View style={{...styles.containerStyle, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    flexGrow: 1
  }
};

export { CardSection };
