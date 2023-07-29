import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList } from 'react-native'

const InstructionCard = ({section, data}) => {
  return (
    <View style={[tw`mx-3`,]}>
        <View>
            <Text style={[tw`text-xl font-bold`]}>{section}</Text>
        </View>
        <FlatList
        horizontal={true}
        data={data}
        snapToStart={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
            style={[tw`mx-3 my-3 p-3 `,{borderColor:'black', maxWidth: 150, elevation: 0.5, borderRadius: 3}]}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Image source={item.image} style={{maxHeight:100, height:100}} resizeMode='contain'/>
                    <Text style={tw`font-bold`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default InstructionCard

const styles = StyleSheet.create({})