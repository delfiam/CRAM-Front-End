import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet } from 'react-native'
import ListadoHome from '../components/ListadoHome'
import { useNavigation } from '@react-navigation/native'
import Filtros from '../components/filtros'

export default function HomeScreen() {
    const navigation = useNavigation();
    const [lugares, setLugares] = useState([])
    const headers = {
        "Content-Type": "application/json",

    };
    const getLugares = () => {
        return axios.get('http://localhost:3000/lugares', {headers})
            .then(res => {
                const l = res.data
                setLugares(l)
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {

        getLugares()
    }, [])

    console.log(lugares)

    return (
        <View style={styles.pag}>
            <View style={styles.row}>
                <Text  onPress={() => navigation.navigate('Seguidos')}>Seguidos</Text>
                <Text style={{marginLeft: '2%',marginRight: '2%',}}>|</Text>
                <Text onPress={() => navigation.navigate('ParaTi')}> Para Ti </Text>
            </View>
            <Filtros></Filtros>
            <ListadoHome lugares={lugares}></ListadoHome>

        </View>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F5D2F6',
        height: '100%',
        width: '100%',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: '10%',
       
    },
})
