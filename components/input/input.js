import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import Colors from '../constants/const'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
    label,
    iconName, 
    error, 
    password,
    onFocus=()=>{}, 
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword]= useState(password)
  return (
    <View style={[tw``, ]}>
      <Text style={[tw`text-gray-400`,styles.label]}>{label}</Text>
      <View style={[tw``, styles.inputContainer, {borderColor: error ? Colors.red: isFocused? Colors.darkblue:Colors.light }]}>
        <Icon style={{fontSize:22, color: Colors.darkblue, marginRight: 10}} name={iconName}/>
        <TextInput
        secureTextEntry={hidePassword}
        autoCorrect={false}
        onFocus={()=>{
            onFocus();
            setIsFocused(true);
        }}
        onBlur={()=>{
            setIsFocused(false);
        }}
        cursorColor={'black'}
        style={{color: Colors.darkblue, flex:1}}
        {...props}
        />
        {password && <Icon 
        onPress={()=>{setHidePassword(!hidePassword)}}
        name={hidePassword? 'eye-outline': 'eye-off-outline'}
        style={{fontSize:22, color: Colors.darkblue}}
        />}
        
      </View>
      {error && <Text style={{color: Colors.red, fontSize: 12, marginTop:7}}>{error}</Text>
      }
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
    },
    inputContainer: {
        height: 55,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
    }
})