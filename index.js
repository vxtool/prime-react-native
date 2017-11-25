import React from 'react';
import { AppRegistry } from 'react-native';
import App from './source';

const Root = () => () => <App routeName="home" />;

AppRegistry.registerComponent('descco', Root);
