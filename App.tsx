import React from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

  //@ts-ignore
import foto from './assets/foto.jpg'
import Card from './src/Componets/Card'

export default function App() {

  function handlerRedeSocial(rede_social: string) {
    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Meu Github','https://www.linkedin.com/in/maxmilliano/')
      break;
      case 'github':
        Alert.alert('Meu Linkedin','https://github.com/Eletromaximus')
      break
    }
  }

  return (
    <>
      <View style={style.page} >
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>MAX MILLIANO</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>

          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handlerRedeSocial('github')}>
              <Icon size={30} name='github' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerRedeSocial('linkedin')}>
              <Icon size={30} name='linkedin' />
            </TouchableOpacity>  
          </View>
        </View>

        <Card titulo='Formação Acadêmica'>
          <Text style={style.card_content_text}>IFG</Text>
          <Text style={style.card_content_text}>SENAI</Text>
          <Text style={style.card_content_text}>Alura</Text>
        </Card>
        
        <Card titulo='Experiência Profissional' >
        <Text style={style.card_content_text}>XYZ</Text>
          <Text style={style.card_content_text}>123</Text>
          <Text style={style.card_content_text}>abc</Text>
        </Card>

      </View>
    </>
  );
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});
