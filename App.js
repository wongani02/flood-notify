import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import ContainerComponent from './screens/container';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import HistoryScreen from './screens/HistoryScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(()=>{
    setTimeout(authUser, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('user');
      if (userData){
        userData = JSON.parse(userData);
        if (userData?.loggedIn){
          setInitialRouteName('Container');
        }else{
          setInitialRouteName('LoginScreen');
        }
      }else{
        setInitialRouteName('RegisterScreen');
      }
    }catch{
      setInitialRouteName('RegisterScreen');
    }
  };


  return (
    
    <NavigationContainer>
      {initialRouteName == '' ? ( <Loader visible={true}/> ): 
       (<>
        <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
            name='RegisterScreen'
            component={RegisterScreen}
            />
            <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            />
            <Stack.Screen
            name='Container'
            component={ContainerComponent}
            />
            <Stack.Screen
            name='MapScreen'
            component={MapScreen}
            />
            <Stack.Screen
            name='HistoryScreen'
            component={HistoryScreen}
            />
          </Stack.Navigator>
        </>)
       }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
