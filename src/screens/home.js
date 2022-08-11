import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import ListadoHome from '../components/ListadoHome'
import Filtros from '../components/filtros'
import Buscador from '../components/buscador'

export default function HomeScreen() {
    const [lugares, setLugares] = useState([{
        "IdLugar": "aaa123",
        "nombre": "Las Violetas",
        "description": "Confiteria",
        "foto": require('../assets/lasvioletas.jpg'),
    },])
    const headers = {
        "Content-Type": "application/json",
    };
    const getLugares = () => {
        return axios.get('http://localhost:3000/lugares', { headers })
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
        <KeyboardAvoidingView style={styles.pag} behavior={Platform.OS === "" ? "padding" : "height"}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text >Seguidos</Text>
                    <Text style={{ marginLeft: '2%', marginRight: '2%', }}>|</Text>
                    <Text >Para Ti</Text>
                </View>
                <Buscador />
                <Filtros></Filtros>
                <ListadoHome lugares={lugares}></ListadoHome>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F7D250',
        height: '100%',
        width: '100%',
        flex: 1,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: '10%',
    },
})
