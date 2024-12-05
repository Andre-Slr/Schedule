import React from 'react';
import { View, Text } from 'react-native';

import { Materia_detalle_styles } from '../styles/Materia_detalle_styles';
import { Const_styles } from '../styles/Const_styles';

const Detalle_materia = ({ route }) => {
    const { user_horario, index } = route.params;
    const actual_materia = user_horario[index];

    return(
        <View style={Materia_detalle_styles.Body}>
            <View style={{height:'auto'}}>
                <Text style={Materia_detalle_styles.Name}>{`${actual_materia ? actual_materia.nombre_materia : 'DETALLES DE MATERIA NO DISPONIBLES'}`}</Text>
                    
            </View>
            
            <View style={{
                backgroundColor: Const_styles.Color_3,
                margin: 10,
                padding: 4, 
                borderRadius: 18 }}>

                <View style={Materia_detalle_styles.Materia}>
                    <Text style={Materia_detalle_styles.Rayita}>SESIONES DE CLASE</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width:'50%' }}>
                            <Text style={Materia_detalle_styles.Data}>DÍAS</Text>
                            
                            <Text style={Materia_detalle_styles.Data}>HORARIO</Text>

                            <Text style={Materia_detalle_styles.Data}>EDIFICIO</Text>
                            
                            <Text style={Materia_detalle_styles.Data}>AULA</Text>

                            <Text style={Materia_detalle_styles.Data}>PROFESOR</Text>
                        </View>
                        
                        <View style={{ width:'50%' }}>
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.dias : ''}`}</Text>
                            
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.horario : ''}`}</Text>

                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.edificio : ''}`}</Text>
                            
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.aula : ''}`}</Text>    

                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.profesor : ''}`}</Text>
                        </View>

                    </View>

                </View>

                <View style={Materia_detalle_styles.Materia}>

                    <Text style={Materia_detalle_styles.Rayita}>INFORMACIÓN DE LA MATERIA</Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{width:'50%'}}>
                            <Text style={Materia_detalle_styles.Data}>NRC</Text>
                            
                            <Text style={Materia_detalle_styles.Data}>CLAVE</Text>

                            <Text style={Materia_detalle_styles.Data}>SECCIÓN</Text>
                            
                            <Text style={Materia_detalle_styles.Data}>CRÉDITOS</Text>
                        </View>
                        
                        <View style={{width:'50%'}}>
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.crn : ''}`}</Text>
                            
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.clave_materia : ''}`}</Text>

                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.seccion : ''}`}</Text>
                            
                            <Text style={Materia_detalle_styles.DataRight}>{`${actual_materia ? actual_materia.creditos : ''}`}</Text>
                        </View>
                    
                    </View>
                </View>
            </View>
        </View>
    )

}

export default Detalle_materia;