import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        icon: 'map-outline',
        location: 'Location',
        destination: 'View location on map',
        screen: 'MapScreen',
    },
    {
        id: '2',
        icon: 'md-reader-outline',
        location: 'History',
        destination: 'View previous changes',
        screen: 'HistoryScreen'
    },
    {
        id: '3',
        icon: 'md-expand-outline',
        location: 'Visualise',
        destination: 'Take a quick summary',
        screen: 'Container'
    },
    // {
    //     id: '4',
    //     icon: 'arrow-back-circle-outline',
    //     location: 'Sign Out',
    //     destination: 'this option will log you out',
    //     screen: 'Container'
    // },
]

const HomeCard = ({}) => {

    const navigation = useNavigation();
  return (
    <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={(item)=>(
            <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
        )}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} style={tw`flex-row`}>
                <Ionicons style={tw`mr-4 rounded-full bg-gray-300 p-3 m-2`} name={item.icon} size={24} color="black" />
                
                <View style={tw`pt-2 flex-1`}>
                    <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
                <View >
                    <Entypo style={tw`m-2 p-3 `}  name="chevron-thin-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default HomeCard

const styles = StyleSheet.create({})