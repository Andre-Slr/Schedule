import React, { Component, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Const_styles } from '../styles/Const_styles';
import { Datos_styles } from '../styles/Datos_styles';

const Datos = ({ navigation, route}) => {
  const { codigo, user_data } = route.params;
  const [ user_photo, setUser_photo ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const [ photo_preview, setPhoto_preview ] = useState(false);
  
  useEffect(() => {
    const fetchDatos = async() => {
      try {
        const response = await fetch(`http://148.202.152.33/cucei/fotoA.php?codigo=${codigo}`);
        //const response = await fetch(`http://148.202.152.33/cucei/fotoA.php?codigo=1`);
        const data = await response.text();
        setUser_photo(data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        if (error == 'TypeError: Network request failed') {
          Alert.alert('Error', 'No conectado a internet')
        }
      }
    }
    fetchDatos();
  }, [codigo]);

  return (
    <View>
      <View style={{
        backgroundColor: Const_styles.Color_3_Shadow,
        marginTop: 100,
        borderRadius: 18,
        margin: 10,
      }}>
        
        {/*
        {!photo_preview ? (
          <TouchableOpacity onPress={() => setPhoto_preview(!photo_preview)} style={Datos_styles.Touch}>
            {
              (user_photo !== 'data:image/jpeg;base64,eyJtZXNzYWdlIjoiQ1x1MDBmM2RpZ28gbm8gbG9jYWxpemFkbyJ9') 
              ? 
                (!loading ? (<Image 
                  style={ Datos_styles.User_photo } 
                  source={{ uri:user_photo }}
                  blurRadius={20}/>)
                  :
                  (<ActivityIndicator size='large' color={Const_styles.Color_3}/>)) 
                :
                (<Text style={ Datos_styles.User_photo_not }>Imagen no encontrada</Text>)
            }
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Foto alumno', { foto:user_photo})} onPressOut={() => setPhoto_preview(!photo_preview)} style={Datos_styles.Touch}>
            {
              (user_photo !== 'data:image/jpeg;base64,eyJtZXNzYWdlIjoiQ1x1MDBmM2RpZ28gbm8gbG9jYWxpemFkbyJ9') 
              ? 
                (!loading ? (<Image 
                  style={ Datos_styles.User_photo } 
                  source={{ uri:user_photo }}/>)
                  :
                  (<ActivityIndicator size='large' color={Const_styles.Color_3}/>)) 
                :
                (<Text style={ Datos_styles.User_photo_not }>Imagen no encontrada</Text>)
            }
          </TouchableOpacity>
        )} 
        */}
        <TouchableOpacity onPress={() => navigation.navigate('Foto alumno', { foto:user_photo})} onPressOut={() => setPhoto_preview(!photo_preview)} style={Datos_styles.Touch}>
            {
              (user_photo !== 'data:image/jpeg;base64,eyJtZXNzYWdlIjoiQ1x1MDBmM2RpZ28gbm8gbG9jYWxpemFkbyJ9') 
              ? 
                (!loading ? (<Image 
                  style={ Datos_styles.User_photo } 
                  source={{ uri:user_photo }}/>)
                  :
                  (<ActivityIndicator size='large' color={Const_styles.Color_3}/>)) 
                :
                (<Text style={ Datos_styles.User_photo_not }>Imagen no encontrada</Text>)
            }
          </TouchableOpacity>

        {/* Datos Estudiante */}
        <View style={{
          backgroundColor: Const_styles.Color_4, 
          margin: 10,
          padding: 5,
          borderRadius: 18,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          }}>

          {/* Nombre */}
          <Text style={ Datos_styles.Name }>{user_data.nombre}</Text>
          {/* Código */}
          <Text style={ Datos_styles.Codigo }>{codigo}</Text>
          {/* Tipo de usuario */}
          <Text style={ Datos_styles.Estatus }>{user_data.tipoUsuario}: {user_data.estatus}</Text>
        </View>
        
        {/* Datos Carrera */}
        <View style={{
          backgroundColor: Const_styles.Color_4, 
          margin: 10,
          marginTop:0,
          padding: 5,
          borderRadius: 18,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          }}>
          <Text style={ Datos_styles.Subtitulo }>ESCUELA</Text>
          <Text style={ Datos_styles.Info }>{user_data.carrera[0].escuela}</Text>
          <Text style={ Datos_styles.Subtitulo }>CARRERA</Text>
          <Text style={ Datos_styles.Info }>{user_data.carrera[0].descripcion} ({user_data.carrera[0].clave})</Text>
          <Text style={ Datos_styles.Subtitulo }>NIVEL</Text>
          <Text style={ Datos_styles.Info }>{user_data.carrera[0].nivelDesc}</Text>
          <Text style={ Datos_styles.Subtitulo }>CICLO DE INGRESO</Text>
          <Text style={ Datos_styles.Info }>{user_data.carrera[0].cicloIngreso}</Text>
          <Text style={ Datos_styles.Subtitulo }>ULTIMO CICLO</Text>
          <Text style={ Datos_styles.Info }>{user_data.carrera[0].ultimoCiclo}</Text>
        </View>

      </View>
    </View>
  );

}

export default Datos;