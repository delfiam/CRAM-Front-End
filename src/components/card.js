import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { tailwind } from "react-native-tailwindcss";
import { useTailwind } from 'tailwind-rn';
import TailwindProvider from "tailwind-rn";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Card(props) {
    const tailwind = useTailwind();
    return (
         props.map((r) => { 
        <View > 
   
          <View style={[styles.container, tailwind("flex items-center")]}>
          <Icon name={'heart'} style={styles.corazon}/>
     
            <View>
          <Text style={styles.titulo}> {r.titulo}   </Text>
          <Text style={styles.descripcion}> {r.descripcion} </Text>
          </View>
           <Text>
             <Image  style={styles.image} source={r.imagen}/>
             </Text>
          </View>
        </View>
    })
         

    );
  }


const styles = StyleSheet.create({
  container: {
    width: "363px",
    height: "152px",
    backgroundColor: "#F8F7F7",
    boxShadow: "7px 7px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    marginTop: "40px",
    marginHorizontal: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "50%",
    height: "50%",
    position: "absolute",
right: "20px",
bottom: "15px",
  },
  titulo:{
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "10px",
    textAlignVertical: "left",
    
  },
  corazon: {
    color: "red",
    textAlign: "right",
    fontSize: '30px',
    marginTop: '15px',
    marginRight: '15px',
  }, 
  descripcion: {
    fontSize: "15px",
    color: "grey",
    marginLeft: "10px",
  }
});
