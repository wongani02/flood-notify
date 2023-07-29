import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: 1,
        name: 'Sunday',
    },
    {
        id: 2,
        name: 'Monday',
    },
    {
        id: 3,
        name: 'Tuesday',
    },
    {
        id: 4,
        name: 'Wednesday',
    },
    {
        id: 5,
        name: 'Thursday',
    },
    {
        id: 6,
        name: 'Friday',
    },
    {
        id: 7,
        name: 'Saturday',
        history: {
            id: 1,
            status: 'Normal',
            color: 'green',
            updated: '23:00:05',
        }
    },
]

const HorizontalScroll = () => {
  return (
    <FlatList
    style={{maxHeight: 40, marginBottom: 3}}
    data={data}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item)=>{item.id}}
    renderItem={({item})=>(
        <TouchableOpacity style={{height:40}}>
            <View style={[tw``, {maxHeight: 40}]} >
                <Text
                style={tw`bg-green-200 my-auto ml-2 p-1 px-2 font-bold rounded-full`}
                >{item.name}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({})