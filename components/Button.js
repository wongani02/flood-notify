import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from './constants/const'
import tw from 'tailwind-react-native-classnames'

const Button = ({title, onPress=()=>{}}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[tw`mt-10`,{
        height: 55,
        width: '100%',
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
    }]}
    >
        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})