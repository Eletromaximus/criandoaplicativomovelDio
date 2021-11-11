import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

  //@ts-ignore
import foto from './assets/foto.jpg'

export default function App() {
  // const [ numero, setNumero ] = useState(0)

  function handlerRedeSocial(rede_social: string) {
    switch(rede_social) {
      case 'linkedin':
        alert('https://www.linkedin.com/in/maxmilliano/')
      break;
      case 'github':
        alert('https://github.com/Eletromaximus')
      break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>MAX MILLIANO</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <Icon size={30} name='github' />
            <Icon size={30} name='facebook' />
            <Icon size={30} name='linkedin' />
          </View>
        </View>
      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>Formação Acadêmca</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>IFG</Text>
            <Text style={style.card_content_text}>SENAI</Text>
            <Text style={style.card_content_text}>Alura</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
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
    width: '60%',
    marginTop: 20
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',  
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card_content: {
    color: '#939393',
    marginTop: 10
  },
  card_header: {
    
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});
