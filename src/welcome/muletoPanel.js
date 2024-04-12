import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
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
  render() {
    const {image} = this.state;
    return (
      <View style={styles.containerPanel}>
        <View style={styles.centralPanel}>
          <View style={styles.advice}>
            <Text>
              Para una mejor experiencia
            </Text>
            <Text>
              gire su móvil a posición apaisada.
            </Text>
          </View>
          <View style={styles.nav}>
              <Text style={styles.navBtn}>
                Anterior
              </Text>
              <Text style={styles.navBtn2}>
                Inicio
              </Text>
              <Text style={styles.navBtn1}>
                Siguiente
              </Text>
          </View>
        </View>
        <View style={styles.centralPanel}>
          <Image source={asset(image.src)} style={{width:image.width, height:image.height}}/>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Comenzar
            </Text>
          </View>
          <View style={styles.advice}>
            <Text>
              Para una mejor experiencia
            </Text>
            <Text>
              gire su móvil a posición apaisada.
            </Text>
          </View>
          <View style={styles.nav}>
              <Text style={styles.navBtn}>
                Anterior
              </Text>
              <Text style={styles.navBtn2}>
                Inicio
              </Text>
              <Text style={styles.navBtn1}>
                Siguiente
              </Text>
          </View>
        </View>
        <View style={styles.centralPanel}>
          <View style={styles.advice}>
            <Text>
              Para una mejor experiencia
            </Text>
            <Text>
              gire su móvil a posición apaisada.
            </Text>
          </View>
          <View style={styles.nav}>
              <Text style={styles.navBtn}>
                Anterior
              </Text>
              <Text style={styles.navBtn2}>
                Inicio
              </Text>
              <Text style={styles.navBtn1}>
                Siguiente
              </Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  // Fill the entire surface
  containerPanel: {
    flexDirection: 'row',
    width: 3500,
    height: 1500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    transform: [
      { translate: [10, 1.5, 10] },
      { scale: 1 },
      { rotateY: 0 }
  ],
  },
  centralPanel: {
    flexDirection: 'column',
    width: 800,
    height: 800,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transform: [
      { translate: [0, 0, 0] },
      { scale: 1 },
      { rotateY: 0 }
  ],
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
  nav: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    margin: 15,
    padding: 10,
    paddingLeft: 25,
    fontSize: 50,
    opacity: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navBtn: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
  },
  navBtn1: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 8,
    marginTop: 2,
  },
  navBtn2: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    marginTop: 1,
  },
});