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

export default class InitButton extends React.Component {
  
    changeBackground(panorama) {
      Environment.setBackgroundImage(asset(panorama));
    }

    render() {
        return (
            <View style={styles.greetingBox}>
                <VrButton onClick={() => this.changeBackground('/backgrounds/room111.avif')}>
                    <Text style={styles.greeting}>
                            Comenzar
                        </Text>
                </VrButton>
            </View>
        )
    }
};

const styles = StyleSheet.create({
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
  });