import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Horario from '../screens/Horario';
import Detalle_materia from '../screens/Detalle_materia';
import Drawer from './Drawer';
import {Const_styles} from '../styles/Const_styles';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import Foto_alumno from '../components/Foto_alumno';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [color, setColor] = useState(true);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        headerTitleAlign: 'left',
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: Const_styles.Color_3,
          },
          title: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => setColor(!color)}>
              <View
                style={{
                  width: 60,
                  height: 30,
                  marginRight: 15,
                  backgroundColor: Const_styles.Color_1,
                  borderRadius: 18,
                }}>
                <View
                  style={color ? Styles.Color_Blue : Styles.Color_Red}></View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Horario"
        component={Horario}
        options={{
          headerStyle: {
            backgroundColor: Const_styles.Color_3,
          },
          title: '',
        }}
      />
      <Stack.Screen
        name="Detalle materia"
        component={Detalle_materia}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Const_styles.Color_3,
          },
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{
          headerStyle: {
            backgroundColor: Const_styles.Color_3,
          },
          title: '',
        }}
      />
      <Stack.Screen
        name="Foto alumno"
        component={Foto_alumno}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Const_styles.Color_3,
          },
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

const Styles = StyleSheet.create({
  Color_Blue: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: '#3d7dd3',
    borderRadius: 18,
  },
  Color_Red: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 5,
    backgroundColor: '#ca3537',
    borderRadius: 18,
  },
});
