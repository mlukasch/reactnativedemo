import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export const Content = () => <App />;

AppRegistry.registerComponent('test4', () => Content);
