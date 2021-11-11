import { View, Text } from "react-native"
import React, { ReactChild } from "react"
import style from './style'
interface ICard {
  titulo: string,
  children: React.ReactNode
}

export default function Card ({titulo, children}: ICard) {
  return (
    <View style={style.card_container} >

      <View style={style.card}>
        <View style={style.card_header}>
          <Text>{titulo}</Text>
        </View>

        <View style={style.card_content}>
          {children}
        </View>
      </View>

    </View>
  )
}
