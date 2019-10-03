import React, { useState, useEffect} from 'react';
import { SafeAreaView, Alert, Text, AsyncStorage, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api'

export default function Book({ navigation }){
  const [date, setDate] = useState('')
  const id = navigation.getParam('id')

  async function handleSubmit(){
    const user_id = await AsyncStorage.getItem('user')
    
    await api.post(`/spots/${id}/bookings`,{
      date
    },{
      headers: { user_id }
    })
    Alert.alert('Solicitação de reserva enviada.')
    navigation.navigate('List')
  }

  async function handleCancel(){
    navigation.navigate('List')
  }
  return (
  <SafeAreaView style={styles.container}>
     <Text style={styles.label}>DATA DE INTERESSE *</Text>
        <TextInput
          style={styles.input}
          placeholder="Qual data você quer reservar ?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>  
      </TouchableOpacity>  

      <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>  
      </TouchableOpacity>  
  </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container:{
    margin: 30,
  },
  label:{
    marginTop: 60,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 34,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    height: 34,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
})