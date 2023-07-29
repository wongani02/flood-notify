import { ScrollView, StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import InstructionCard from '../components/InstructionCard'
import Colors from '../components/constants/const'

const before = [
    {
        id: '1',
        title: 'Stay informed on local news and weather updates',
        image: require ('../assets/images/rain-svgrepo-com.png'),
    },
    {
        id: '2',
        title: 'Know how to evacuate and safe altenertive routes',
        image:require ('../assets/images/map-svgrepo-com.png')
    },
    {
        id: '3',
        title: 'Leave before flooding starts especially in flood prone areas',
        image:require ('../assets/images/walking-time-svgrepo-com.png')
    },
    
];

const during = [
    {
        id: '1',
        title: 'Disconnect all electrical appliances',
        image: require ('../assets/images/disconnect-svgrepo-com.png')
    },
    {
        id: '2',
        title: 'Do not walk or dive in flood water',
        image: require ('../assets/images/walking-smartphone-prohibition-mark-svgrepo-com.png')
    },
    {
        id: '3',
        title: 'Move to a higher ground',
        image: require ('../assets/images/hiking-svgrepo-com.png')
    },
    {
        id: '4',
        title: 'Follow evacuation orders',
        image: require ('../assets/images/tsunami-evacuation-building-svgrepo-com.png')
    },
    {
        id: '5',
        title: 'call apropriate authorities for help ',
        image: require ('../assets/images/phone-call-01-svgrepo-com.png')
    },
];

const after = [
    {
        id: '1',
        title: 'Avoid contact with flood water',
        image: require('../assets/images/historical-flash-flood-disasters-svgrepo-com.png'),
    },
    {
        id: '2',
        title: 'Dont go home or approach danger areas',
        image: require('../assets/images/noentry-svgrepo-com.png'),
    },
    {
        id: '3',
        title: 'Do not swim in flood water',
        image: require('../assets/images/no-swimming-svgrepo-com.png'),
    },
    {
        id: '4',
        title: 'Do not touch power lines during floods',
        image: require('../assets/images/power-line-svgrepo-com.png'),
    },
    {
        id: '5',
        title: 'call apropriate authorities for help ',
        image: require ('../assets/images/phone-call-01-svgrepo-com.png')
    },
];

const InstructionsScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-white flex-1 `]}>
      <ScrollView>
        <View style={[tw`mx-3 my-4`]}>
          <Text style={[tw`text-3xl font-bold`, {color: Colors.blue}]}>What to do incase of floods?</Text>
        </View>
        <InstructionCard section={'Before Floods'} data={before}/>
        <InstructionCard section={'During Floods'} data={during}/>
        <InstructionCard section={'After floods'} data={after}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default InstructionsScreen

const styles = StyleSheet.create({})