import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import StackNavigator from './source/navigation/StackNavigator';
import {Const_styles} from './source/styles/Const_styles';

function App(): React.JSX.Element {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Const_styles.Color_4,
      card: Const_styles.Color_3,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
