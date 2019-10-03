import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView,TouchableOpacity, Text, StatusBar, Image, StyleSheet, AsyncStorage, SafeAreaViewBase } from 'react-native';

import logo from '../assets/logo.png'
import SpotList from '../components/SpotList'


export default function List({ navigation }){
  const [ techs, setTechs ] = useState([])

  async function handleLogout(){
    await AsyncStorage.removeItem('user')
    navigation.navigate('Login')
  }

  useEffect(()=> {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray)
    })
  },[])
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <ScrollView>
          {techs.map(tech =>  <SpotList key={tech} tech={tech} />)}
        </ScrollView>

        <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

      </SafeAreaView>

    )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    height: 32,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  }
})