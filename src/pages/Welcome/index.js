import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <View style={styles.containerLogo}>
            <Animatable.Image 
                animation="flipInY"
                source={require('../../assets/teste.png')}
                style={{width: '100%'}} 
                resizeMode="contain"
            />
           </View>

           <Animatable.View
               animation="fadeInUp"
               delay={600} 
                style={styles.containerForm}>
                <Text style={styles.title}>Monitore suas finanças de forma fácil</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
           </Animatable.View>
        </View>
    );
}  
export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 28,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1',
        marginBottom: 28,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});