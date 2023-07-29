import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeCard from '../components/HomeCard'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import { getDatabase } from 'firebase/database'
import { onValue, ref } from 'firebase/database'


const HomeScreen = ({}) => {
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({});

  const navigation = useNavigation();
  useEffect(()=>{
    setLoading(true);
    //fetch user details
    getUserDetails();

    const db = getDatabase();

    const starCountRef = ref(db, '/Water Level/History');
    onValue(starCountRef, (snapshot)=>{
            
        const data = snapshot.val();
        if (data){
          //parse the firebase data
          var parsed = JSON.parse(JSON.stringify(data));
          
          // process the data
          let processedData = [];
          let index = 1;
          let color = '';
          for (ite in parsed){
              if (parsed[ite] == 'Low Water level'){
                  color = '#a3e635';
              }else if(parsed[ite] == 'Middle Water level'){
                  color = '#fcd34d';
              }else{
                  color = '#b91c1c';
              }
              item = {
                  id: index,
                  value: parsed[ite],
                  color: color,
                  updated: new Date().toLocaleTimeString([], { timeStyle: "medium" }),
              }
              processedData.push(item);
              index+=1
          }
          //reverse the data for the most recent to be at the top
          var ordered = processedData.reverse()
          
          //filter out the first object because it is useless
          var finalData = ordered.slice(1)
          
          //set the data using the use state hook
          var mostRecent = finalData.at(0);
          
          setData(mostRecent);
        }else{
          setData([])
        }


    })

    setLoading(false)
  }, []);

  const getUserDetails = async () =>{
    const userData = await AsyncStorage.getItem('user');
    if (userData){
      setUserDetails(JSON.parse(userData));
    }
  }

  const logout = () =>{
    AsyncStorage.setItem(
      'user', 
      JSON.stringify({...userDetails, loggedIn: false}),
      );
      navigation.navigate('LoginScreen');
  }
  return (

    <SafeAreaView style={tw`bg-white flex-1`}>
      {/* header */}
      <Loader visible={loading}/>
       <View style={tw`flex-row px-4 bg-white pt-3 mb-1`}>
        <View style={tw`flex-1`}>
          <Text style={tw` text-2xl font-bold`}>Hello there!!</Text>
          <Text style={tw`text-lg font-bold text-blue-600`}>{userDetails?.fullname}</Text>
        </View>
        {/* <Image 
          style={tw`content-center pt-2 w-10 h-10 rounded-full my-auto`} 
          source={require('../assets/images/muller.jpg')}/> */}
       </View>
       <View style={tw`my-4 flex-col bg-white`}>
        <View style={tw`mx-auto`}>
          <Image style={{width:150, height:150}} resizeMode='contain' source={require('../assets/images/simple-water-level.png')}/>
        </View>
        
        <View style={[tw`flex-row mt-4 mx-auto`, {}]}>
          <Ionicons size={45} color={'#505FEE'} name='md-location-outline'/>
          <Text 
          numberOfLines={1}
          style={tw`text-2xl text-gray-500 font-bold my-auto`}>Blantyre, Chichiri River</Text>
        </View>
        <View style={[tw`flex-row mx-auto`, {}]}>
          <Text style={tw`my-auto text-gray-500 text-lg font-bold`}>water level:</Text>
          <Text style={[tw`my-auto ml-2 px-2 font-bold rounded-full`, {backgroundColor: data.color}]}>{data.value}</Text>
        </View>
        <View style={[tw`flex-row mx-auto`, {}]}>
          <Text style={tw`my-auto text-gray-500 text-sm font-bold`}>updated @ {data.updated}</Text>
        </View>
       </View>
       <View style={tw`mx-4 my-2`}>
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
          <Text style={tw`mr-4 text-gray-500 my-2 font-bold`}>Quik Options</Text>
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
        </View>
       <HomeCard/>
       <TouchableOpacity onPress={logout} style={tw`flex-row`}>
          <SimpleLineIcons style={tw`mr-4 rounded-full bg-gray-300 p-3 m-2`} name="logout" size={24} color="black" />
          <View style={tw`pt-2 flex-1`}>
              <Text style={tw`font-semibold text-lg`}>Sign Out</Text>
              <Text style={tw`text-gray-500`}>This option will sign you out</Text>
          </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})