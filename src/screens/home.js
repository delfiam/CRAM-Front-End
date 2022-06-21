import React from 'react'
import { Image, View, Text, Button, Input, StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Card from '../components/card'
const [lugar, buscarLugar] = UseState('aa')
export default function HomeScreen({ navigation }) {
    return (
        
        <View style={styles.pag}>
            <Text>HomeScreen</Text>
            <Button title="Ir a perfil" onPress={() => navigation.push('Profile')} />
            <View>
                
                <TouchableOpacity onPress={()=> navigation.navigate("details")}>
                <Text>{lugar}</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
 
}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F6D250',
        height: '100%',
        width: '100%',
    },
})