import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Horario_styles } from '../styles/Horario_styles';
import Horario_materia from '../components/Horario_materia';
import { Const_styles } from '../styles/Const_styles';

// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated

const Horario = ({ navigation, route }) => {
  const { codigo, nip, carrera } = route.params; // Extraemos codigo y nip
  const [user_horario, setUser_horario] = useState([]);
  const [user_data, setUser_data] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorarios = async () => {
      const formdata = new FormData();
      formdata.append("codigo", codigo);
      formdata.append("nip", nip);

      try {
        const response = await fetch("http://148.202.152.33/cucei/alumnoH.php", {
          method: "POST",
          body: formdata,
          redirect: "follow"
        });
        
        const parsedValue = await response.json();
        //console.log(parsedValue);

        if (parsedValue.horario) {
          setUser_horario(parsedValue.horario);
          setUser_data(parsedValue)
          setLoading(false);
        } else {
          console.error('El campo "horario" no existe en los datos recibidos.');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchHorarios();
  }, [codigo, nip]); // Dependencias para ejecutar cuando cambien

  const clickMateria = (index) => {
    if (user_horario.length > 0) {
      //console.log(user_horario[index].nombre_materia);
      navigation.navigate('Detalle materia', { user_horario: user_horario, index: index });
    } else {
      console.error('No hay materias en el horario.');
    }
  }

  if (loading) {
    return(
      <View style={{
        flex: 1,
        justifyContent: 'center',}}>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    )
  } else {
    return (
      <View style={Horario_styles.Body}>
        <View style={{ height: 'auto' }}>
          <Text style={Horario_styles.Name}>
            {/*
            {user_data.alumno ? user_data.alumno : 'Alumno no disponible'}
            */}
            {carrera.descripcion}
          </Text>
          {/*
          <Text style={Horario_styles.School}>{user_data.campus}</Text>
          */}
          <Text style={Horario_styles.Name_Horario}>
            {`${user_data.carrera ? user_data.carrera : ''} - ${user_data.ciclo ? user_data.ciclo : ''}`}
          </Text>
        </View>
        
        <View style={Horario_styles.Horario}>

          <View style={{
            backgroundColor: Const_styles.Color_3_Shadow,
            height: '90%',
            margin: 10,
            marginTop: 5,
            padding: 4,
            borderRadius: 18
          }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {user_horario.length > 0 ? (
                user_horario.map((asignatura, index) => (
                  <TouchableOpacity key={index} onPress={() => clickMateria(index)}>
                    <Horario_materia
                      index={index}
                      datos={asignatura}
                    />
                  </TouchableOpacity>
                ))
              ) : (
                <View style={{
                  width: 'auto',
                  height: 'auto',
                  backgroundColor: Const_styles.Color_4,
                  borderRadius:18,
                  margin: 5,
                  padding: 10,
                }}>
                  <Text style={Horario_styles.Materia_Lugar}>HUBO UN ERROR</Text>
                  <Text style={Horario_styles.Materia_Nombre}>NO HAY MATERIAS DISPONIBLES</Text>
                </View>
              )}
            </ScrollView>
          </View>
          {/*
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Detalle materia', { user_horario: user_horario, index: 9 })}>
              <Text style={{ color: '#3d3d3d', textAlign: 'center' }}>°w°</Text>
            </TouchableOpacity>
          </View>
              */}
        </View>
      </View>
    );}
}

export default Horario;
