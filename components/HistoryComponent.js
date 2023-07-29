import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Ionicons } from '@expo/vector-icons';
import { my_name } from '../config';
import { getDatabase } from 'firebase/database';
import { onValue, ref } from 'firebase/database';
import Loader from './Loader';



const HistoryComponent = () => {
    const db = getDatabase();
    const [datam, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const starCountRef = ref(db, '/Water Level/History');
        
        onValue(starCountRef, (snapshot)=>{
            
            const data = snapshot.val();
            console.log('passing');
            // const newData = Object.keys(data).map(key => ({
            //     id: key,
            //     ...data[key]
            // }))
        
            //parse the firebase data
            var parsed = JSON.parse(JSON.stringify(data));
            
            // process the data
            let processedData = [];
            let index = 1;
            let color = '';
            for (ite in parsed){
                if (parsed[ite] == 'Low Water level'){
                    color = 'green';
                }else if(parsed[ite] == 'Middle Water level'){
                    color = 'orange';
                }else{
                    color = 'red';
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
            setData(finalData);
            setLoading(false)
        })
    }, [])
    

  return (
    <>
    <Loader visible={loading}/>
    <FlatList
    style={{
        paddingBottom: 40,
    }}
    data={datam}
    keyExtractor={(item)=>item.id}
    ItemSeparatorComponent={(item)=>(
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
    )}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>(
        <TouchableOpacity>
            
            <View style={[tw`flex-row`, {elevation: 0.5}]}>
                <Ionicons style={tw`mr-4 rounded-full  p-3 m-2`} name={'md-warning'} size={24} color={item.color} />
                
                <View style={tw`pt-2 flex-1`}>
                    <View style={tw`flex-row`}>
                       <Text style={tw`font-semibold text-lg font-bold`}>status:</Text>
                        <Text style={[tw`my-auto font-bold text-lg ml-2`, {color: item.color,}]}>{item.value}</Text>
                    </View>
                    <Text style={tw`text-gray-500`}>updated @ {item.updated}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )}
    />
    </>
  )
}

export default HistoryComponent

const styles = StyleSheet.create({})