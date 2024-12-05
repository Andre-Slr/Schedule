import React from 'react';
import { View, Text } from 'react-native';

import { Horario_styles } from '../styles/Horario_styles';
import { Const_styles } from '../styles/Const_styles';

const Horario_materia = ({ materia, edificio, aula }) => {


    return (
      <View style={{
        width: 'auto',
        height: 80,
        backgroundColor: Const_styles.Color_4,
        borderRadius:18,
        margin: 5,
        padding: 10,
      }}>
        <Text style={Horario_styles.Materia_Lugar}>({edificio} - {aula})</Text>
        <Text style={Horario_styles.Materia_Nombre}>{materia}</Text>
      </View>
    );
}

export default Horario_materia;