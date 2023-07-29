import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HorizontalScroll from '../components/HorizontalScroll';
import HistoryComponent from '../components/HistoryComponent';


const HistoryScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      {/* header */}
       <View style={tw`flex-row px-3 bg-white pt-3 my-4`}>
        <View style={tw`flex-1 flex-col`}>
          {/* <Ionicons onPress={()=>navigation.navigate('Container')} style={tw`my-auto`} name="arrow-back" size={35} color="black" /> */}
          <Text style={tw`my-auto text-3xl  font-bold text-blue-600`}>History</Text>
          <Text style={tw`text-sm text-gray-500`}>showing previous river info for the past 24hrs</Text>
        </View>
       </View>
       <HorizontalScroll />
       <HistoryComponent/>
    </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})