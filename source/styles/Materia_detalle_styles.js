import { StyleSheet } from "react-native";
import { Const_styles } from "./Const_styles";

export const Materia_detalle_styles = StyleSheet.create({
    Body:{
        height:'100%',
        width:'100%',
        marginHorizontal:'auto',
        backgroundColor: Const_styles.Color_4,
        color: Const_styles.Color_2,
    },
    Barra:{
        width:'100%',
        height: 40,
        backgroundColor:Const_styles.Color_3,
    },
    Materia1:{
        width:'auto',
        margin: 5,
        padding: 10,
        backgroundColor: Const_styles.Color_4,
        color: Const_styles.Color_1,
        borderRadius:20,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
    },
    Materia2:{
        width:'auto',
        margin: 5,
        padding: 10,
        backgroundColor: Const_styles.Color_4,
        color: Const_styles.Color_1,
        borderRadius:20,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    Name:{
        fontSize:26,
        marginTop:30,
        marginHorizontal:5,
        height: 'auto',
        color: Const_styles.Color_3_Shadow,
        fontWeight: '500',
        textAlign: 'center',
    },
    Data:{
        fontSize:15,
        margin: 5,
        color: Const_styles.Color_2,
        fontWeight: '400',
        textAlign:'right',
    },
    DataRight:{
        fontSize:15,
        margin: 5,
        color: Const_styles.Color_2,
        fontWeight: '500',
        textAlign:'left'
    },
    Rayita:{
        fontSize:12,
        borderTopWidth: 1,
        borderTopColor: Const_styles.Color_3,
        borderBottomWidth: 1,
        borderBottomColor: Const_styles.Color_3,
        marginBottom:10,
        marginTop: 10,
        color: Const_styles.Color_2,
        marginHorizontal:'auto'
    }
})