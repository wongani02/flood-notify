import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames'
import HistoryScreen from './HistoryScreen'
import HomeScreen from './HomeScreen'
import InstructionsScreen from './InstructionsScreen'
import NotificationsScreen from './NotificationsScreen'
import Colors from '../components/constants/const'

const homeName = 'Home';
const historyName = 'History';
const quickInsrtuctions = 'Help';
const notifications = 'Alerts';


const Tab = createBottomTabNavigator();

const ContainerComponent = () => {
  return (
    
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})=>({
            tabBarActiveTintColor: Colors.blue,
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {paddingBottom: 10, fontSize: 10 },
            tabBarStyle:{ padding:10, height: 60},
            tabBarIcon: ({focused, color, size})=>{
                let iconName;
                let rn = route.name;

                if (rn==homeName){
                    iconName = focused?'home':'home-outline'
                }else if (rn == historyName){
                    iconName = focused? 'md-reader':'md-reader-outline'
                }
                // else if (rn == notifications) {
                //     iconName = focused?'notifications-sharp':'notifications-outline'
                // }
                else if (rn == quickInsrtuctions){
                    iconName = focused?'warning':'warning-outline'
                    return <Ionicons name={iconName} size={size} color={color} />
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
        
        >
            <Tab.Screen name={homeName} options={{headerShown:false}} component={HomeScreen}/>
            <Tab.Screen name={historyName} options={{headerShown:false}} component={HistoryScreen}/>
            {/* <Tab.Screen name={notifications} options={{headerShown:false}} component={NotificationsScreen}/> */}
            <Tab.Screen name={quickInsrtuctions} options={{headerShown:false}} component={InstructionsScreen}/>
        </Tab.Navigator>
    
  )
}

export default ContainerComponent

const styles = StyleSheet.create({})
