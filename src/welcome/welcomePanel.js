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
        height: 300,
      },
      welcome: true
    }
  }
    changeBackground(panorama, st) {
      Environment.clearBackground();
      Environment.setBackgroundImage(asset(panorama));
      this.setState({welcome: st});
    }
    render() {
      const {image} = this.state;
      const stWelcome = this.state.welcome;
      console.log(stWelcome);
    if (stWelcome) { 
      return (
        <View style={styles.centralPanel}>
          <Image source={asset(image.src)} style={{width:image.width, height:image.height}}/>
          <View style={styles.advice}>
            <Text style={styles.greetingtxt}>
              Bienvenido
            </Text>
          <Text>
              Para una mejor experiencia
            </Text>
            <Text>
              gire su móvil a posición apaisada.
            </Text>
          </View>
          <View style={styles.initButton}>
            <VrButton onClick={() => {
              this.changeBackground('/backgrounds/room111.avif', false)
              }
              }>
            <Text style={styles.txtinitButton}>
              Comenzar
            </Text>
            </VrButton>
          </View>
        </View>
    );
  }
  return (
    <View style={styles.centralPanel}>
      <Image source={asset(image.src)} style={{width:image.width, height:image.height}}/>
      <View style={styles.initButton}>
        <VrButton onClick={() => this.changeBackground('/backgrounds/hotel-ext111.avif', true)}>
        <Text style={styles.txtinitButton}>
          Volver
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
    height: 650,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    transform: [
      { translate: [1648, 0, 0] },
      { scale: 1 },
      { rotateY: 0 }
  ],
  },
  greetingtxt: {
    fontSize: 90,
    opacity: 1,
    color: 'rgba(284, 200, 100, 0.8)',
  },
  initButton: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(284, 200, 100, 0.8)',
    borderWidth: 2,
    borderRadius: 20,
  },
  txtinitButton: {
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