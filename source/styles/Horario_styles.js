import { StyleSheet } from "react-native";
import { Const_styles } from "./Const_styles";

export const Horario_styles = StyleSheet.create({
    Body:{
        height:'100%',
        width:'100%',
        marginHorizontal:'auto',
        padding:0,
        backgroundColor: Const_styles.Color_4,
        color: Const_styles.Color_2,
    },
    Barra:{
        width:'100%',
        height: 40,
        backgroundColor:Const_styles.Color_3,
    },
    Horario:{
        height: '80%',
        marginTop: 10,
    },
    Name:{
        fontSize:28,
        marginTop:30,
        marginHorizontal:'auto',
        color: Const_styles.Color_3_Shadow,
        fontWeight: '500',
        textAlign:'center',
    },
    Name_Horario:{
        fontSize:18,
        marginBottom:10,
        marginHorizontal:'auto',
        color: Const_styles.Dark,
        fontWeight: '400',
    },
    School:{
        fontSize:12,
        marginBottom:10,
        marginHorizontal:'auto',
        color: Const_styles.Color_2,
        textAlign:'center',
    },
    Materia:{
        width:'100%',
        height: 100,
        margin:5,
        padding:10,
        borderRadius:20,
        marginHorizontal:'auto',
    },
    Materia_Nombre:{
        height:'auto',
        fontSize:16,
        fontWeight: '400',
        marginHorizontal: 'auto',
        marginVertical: 'auto',
        color: Const_styles.Dark,
        textAlign:'center',
    },
    Materia_Lugar:{
        height: 'auto',
        fontSize:10,
        fontWeight: '400',
        marginHorizontal:'auto',
        color: Const_styles.Dark
    },
    Materia_Clave:{
        height: 'auto',
        fontSize:10,
        fontWeight: '400',
        color: Const_styles.Dark,
        textAlign:'center'
    },
})