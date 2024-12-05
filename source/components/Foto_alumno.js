import { View, Image } from "react-native"

const Foto_alumno = ({ route }) => {
    const { foto } = route.params;

    return(
        <View>
            <Image 
                style={{
                    height:'80%', 
                    width:'90%', 
                    marginHorizontal:'auto',
                    marginVertical:'auto',
                    borderRadius: 10,
                }} 
                source={{ uri:foto }}/>
        </View>
    )
}

export default Foto_alumno;