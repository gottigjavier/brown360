import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Environment,
  VrButton,
} from 'react-360';

export default class WelcomePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: {
        src: '/logos/jorgeflynat11.svg',
        width: 800,
        height: 300
      }
    }
  }
    changeBackground(panorama) {
      Environment.setBackgroundImage(asset(panorama));
    }
  render() {
    const {image} = this.state;
    return (
        <View style={styles.centralPanel}>
          <Image source={asset(image.src)} style={{width:image.width, height:image.height}}/>
          <View style={styles.advice}>
          <Text>
              Para una mejor experiencia
            </Text>
            <Text>
              gire su móvil a posición apaisada.
            </Text>
          </View>
          <View style={styles.greetingBox}>
            <VrButton onClick={() => this.changeBackground('/backgrounds/room111.avif')}>
            <Text style={styles.greeting}>
              Comenzar
            </Text>
            </VrButton>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  centralPanel: {
    flexDirection: 'column',
    width: 800,
    height: 800,
    marginLeft: 80,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transform: [
      { translate: [1, 1, 0] },
      { scale: 1 },
      { rotateY: 0 }
  ],
  },
  greetingBox: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(284, 200, 100, 0.8)',
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