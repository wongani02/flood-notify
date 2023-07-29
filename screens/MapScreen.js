import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames'

const MapScreen = () => {

  return (
    <SafeAreaView style={''}>
      <View >
        <MapView style={styles.map}
          mapType="mutedStandard"
          
         />
      </View>
      <View style={tw`h-10 `}>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
    
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
});