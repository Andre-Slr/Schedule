import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Horario from '../screens/Horario';
import Datos from '../screens/Datos';
//import Login from '../screens/Login';
import { Const_styles } from '../styles/Const_styles';

const Drawer = ({ navigation, route }) => {
  const { codigo, nip, user_data } = route.params; // Extraemos codigo y nip

  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator screenOptions={{
        drawerInactiveBackgroundColor: Const_styles.Color_3, // No seleccionado
        drawerActiveBackgroundColor: Const_styles.Color_3_Shadow,   // Seleccionado
        drawerContentStyle: {
          backgroundColor: Const_styles.Color_3,
        }
      }}>
          <Drawer.Screen name="Horario" component={Horario} initialParams={{codigo:codigo, nip:nip, carrera:user_data.carrera[0]}} />
          <Drawer.Screen name="Datos" component={Datos} initialParams={{codigo:codigo, user_data:user_data}} />
      </Drawer.Navigator>
  );
}

export default Drawer
