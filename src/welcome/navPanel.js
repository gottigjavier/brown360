import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
} from 'react-360';

export default class NavPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: {
        width: 100,
        height: 120
      }
    }
  }
  render() {
    const {image} = this.state;
    return (
      <View style={styles.panel}>
        <View style={styles.advice}>
        <Text>
          Espacio para redes y
        </Text>
        <Text>
          acceso a otras secciones
        </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 200,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  greetingBox: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 30,
    opacity: 1,
  },
  advice: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    padding: 10,
    fontSize: 30,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});