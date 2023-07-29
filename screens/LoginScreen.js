import { Alert, Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Input from '../components/input/input'
import Button from '../components/Button'
import Loader from '../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {
    //user input state
    const [inputs, setInputs] = useState({
        email:'',
        fullname: '',
        phone: '', 
        password: '',
    })

    //error handling state
    const [errors, setErrors] = useState({
        email:'',
        fullname: '',
        phone: '', 
        password: '',
    })

    //loading state
    const [loading, setLoading] = useState(false);

    //validation function
    const validate=()=>{
        
        Keyboard.dismiss();
        let valid = true;

        //validate email
        if (!inputs.email){
            handleError('Please input email', 'email');
            valid=false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please enter a valid email', 'email');
            valid=false;
        }

        //validate password
        if (!inputs.password){
            handleError('Please input your password', 'password')
            valid = false;
        }
        if (valid){
            login();
        }
    }

    //login user function
    const login = () =>{
        setLoading(true);
        setTimeout(async ()=>{
            setLoading(false);
            let userData = await AsyncStorage.getItem('user');
            if (userData){
              userData = JSON.parse(userData);
              if (inputs.email == userData.email && inputs.password == userData.password){
                AsyncStorage.setItem(
                  'user', JSON.stringify({...userData, loggedIn: true}),
                );
                navigation.navigate('Container');
              }else{
                Alert.alert('Error', 'Invalid Credetials')
              }
            }else{
              Alert.alert('Error', 'User does not exist')
            }
        }, 3000)
    }

    //handle user inputs
    const handleOnChange = (text, input) =>{
        setInputs(prevState => ({...prevState, [input]: text}));
    }

    //handle input errors
    const handleError = (errorMessage, input)=>{
        setErrors(prevState => ({...prevState, [input]: errorMessage}))
    }
    
  return (
    <SafeAreaView style={[tw`bg-white`, {flex:1,}]}>
        <Loader visible={loading}/>
        <ScrollView
        contentContainerStyle={{
            paddingTop: 40,
            paddingHorizontal:20,
        }}
        >
            
            <Text 
            style={[tw`text-black`, {fontSize:40, fontWeight: 'bold'}]}
            >Login</Text>
            <Text 
            style={[tw`text-gray-500 my-2`, {fontSize:18, fontWeight: 'bold',}]}
            >Enter Your Login Credentials</Text>
            <View style={[tw`my-2`]}>
                <Input 
                label={'Email'} 
                iconName={'email-outline'} 
                placeholder='Enter your email'
                onChangeText={text => handleOnChange(text, 'email')}
                error={errors.email}
                onFocus={()=>{
                    handleError(null, 'email')
                }}
                />
                 <Input 
                 label={'Password'} 
                 iconName={'lock-outline'} 
                 placeholder='Enter your Password'
                 error={errors.password}
                onFocus={()=>{
                    handleError(null, 'password')
                }}
                 onChangeText={text => handleOnChange(text, 'password')}
                 password={true}/>
                 <Button 
                 title={'Login'} 
                 onPress={validate}
                 />
                 <Text 
                 style={[tw`text-black text-sm font-bold text-center mt-3`]}
                 onPress={()=>{
                    navigation.navigate('RegisterScreen')
                 }}
                 >Don't Have An Account? Register </Text>
                 <Text 
                  style={[tw`text-blue-400 text-center mt-10`, {fontSize:30, fontWeight: 'bold'}]}
                  >Flood Alert</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})