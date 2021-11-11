import { View, Text } from "react-native"
import React from "react"
import style from './style'

export default function Card () {
  return (
    <View style={style.card_container} >

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
  )
}
