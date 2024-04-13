import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import WelcomePanel from './src/welcome/welcomePanel';
import NavPanel from './src/welcome/navPanel';
import TopPanel from './src/welcome/topPanel';
import BottomPanel from './src/welcome/bottomPanel';
import InitButton from './src/welcome/initButton';

AppRegistry.registerComponent('welcomePanel', () => WelcomePanel);
AppRegistry.registerComponent('initButton', () => InitButton);
