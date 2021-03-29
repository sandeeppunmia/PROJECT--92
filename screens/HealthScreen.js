import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import db from '../config';
import firebase from'firebase';

export default class HealthScreen extends Component{


    componentDidMount(){
        console.log("in health screen")
    }
    render(){
        return(
            <View>
                <Text>Health Screen</Text>
           </View>
            
        )
    }
}