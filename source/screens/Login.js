import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, Image, TouchableOpacity, } from 'react-native';
import { saveCredentials, loadCredentials, clearCredentials } from '../Resources/cred_manager';

import { Login_styles } from '../styles/Login_styles';
import { Const_styles } from '../styles/Const_styles';

const Login = ({navigation})  => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(false);
  const [shown, setShown] = useState(true);
  

  useEffect(() => {
    const fetchedCreds = async () => {
      const credentials = await loadCredentials();
      if(credentials) {
        setUsername(credentials.username);
        setPassword(credentials.password);
        setSelected(true);
      }
    };
    fetchedCreds();
  }, []);

  const loginButton = async () => {
    // Hacer una petición para un usuario con ID específico
    try {
      const response = await fetch(`http://148.202.152.33/cucei/credenciales.php?codigo=${username}&nip=${password}`, {method:"POST"});
      const data = await response.json();
      
      if (data.error) {
        Alert.alert('Error', data.error);
      } else if (data.respuesta === false) {
        Alert.alert('Error', 'Credenciales incorrectas');
      } else if (data.nombre) {
        if (selected) {
          await saveCredentials(username, password);
        } else {
          await clearCredentials();
        }
        navigation.navigate('Drawer', { codigo: username.trim(), nip: password.trim(), user_data: data});
      }
    } catch (error) {
      console.log(error);
      if (error == 'TypeError: Network request failed') {
        Alert.alert('Error', 'No conectado a internet')
      }
    }
  };

  return (
    <View style={Login_styles.Body}>
      <View style={{height: 250}}>
        <Text style={Login_styles.Title}>MI HORARIO</Text>

        <Image 
          source={require('../Resources/LogoUdgNegro.png')}
          style={{width:120, height:170, alignSelf: 'center'}}
          />
      </View>
      
      <View style={{height:300}}>
        <View>
          <TextInput
            style={Login_styles.Input}
            placeholder='código'
            keyboardType='numeric'
            textAlign='center'
            onChangeText={setUsername}
            defaultValue={username}/>
        </View>
        
        <View>
          <TextInput
              style={Login_styles.Input}
              placeholder='nip'
              autoCapitalize='none'
              secureTextEntry={shown ? true : false}
              textAlign='center'
              onChangeText={setPassword}
              defaultValue={password}
              onSubmitEditing={loginButton}/>

          <TouchableOpacity 
              onPress={() => setShown(!shown)}
              style={{
                width:30,
                height: 30,
                alignSelf: 'flex-end',
                marginTop:-55,
                marginRight: 15,}}>
            <Image
              source={ shown ? require('../Resources/Show_password.png') : require('../Resources/Hide_password.png')}
              style={{
                width:30,
                height: 30,
                opacity: 0.4}}/>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => setSelected(!selected)} >
            <Text style={selected ? Login_styles.Cajita_si : Login_styles.Cajita_no}></Text>
            <Text style={Login_styles.Text}>Recordar credenciales</Text>
          </TouchableOpacity>
        </View>

      </View>
      
      <View>
        <TouchableOpacity 
          onPress={loginButton}>
          <View style={Login_styles.Button}>
            <Text style={{
              fontSize: 20,
              color: Const_styles.Color_4,
              marginTop:10,
              marginHorizontal:'auto',
              fontWeight:500,
            }}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}



export default Login;