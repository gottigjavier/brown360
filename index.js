import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import WelcomePanel from './src/welcome/welcomePanel';
import NavPanel from './src/welcome/navPanel';

AppRegistry.registerComponent('welcomePanel', () => WelcomePanel);
AppRegistry.registerComponent('navPanel', () => NavPanel);
