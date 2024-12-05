import { StyleSheet } from "react-native";
import { Const_styles } from "./Const_styles";

export const Login_styles = StyleSheet.create({
    Body:{
        height:'100%',
        width:'100%',
        marginHorizontal:'auto',
        padding:30,
        color: Const_styles.Color_2,
        backgroundColor: Const_styles.Color_4
    },
    Title:{
        fontSize:40,
        marginBottom:20,
        marginHorizontal:'auto',
        color: Const_styles.Color_3_Shadow,
        fontWeight: '600',
    },
    Input:{
        fontSize:20,
        width:'100%',
        height: 50,
        borderRadius:20,
        marginVertical:15,
        marginHorizontal:'auto',
        backgroundColor: Const_styles.Color_1,
        color: Const_styles.Color_5,
    },
    Text:{
        fontSize:20,
        width:'100%',
        borderRadius:20,
        marginVertical:-30,
        marginLeft: 40,
        color: Const_styles.Color_2,
        marginHorizontal:'auto',
    },
    Button:{
        width:'100%',
        height: 50,
        marginHorizontal:'auto',
        backgroundColor: Const_styles.Color_3_Shadow,
        borderRadius:20,
    },
    Cajita_no:{
        width:30,
        height: 30,
        marginTop: 40,
        backgroundColor: Const_styles.Color_1,
        borderRadius:10,
    },
    Cajita_si:{
        width:30,
        height: 30,
        marginTop: 40,
        backgroundColor: Const_styles.Color_3_Shadow,
        borderRadius:10,
    }
})