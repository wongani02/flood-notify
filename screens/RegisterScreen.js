import {  Alert, Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import Input from '../components/input/input'
import Button from '../components/Button'
import Loader from '../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'


const RegisterScreen = ({navigation}) => {

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

        //validate full name
        if (!inputs.fullname){
            handleError('Please input a full name', 'fullname')
            valid = false;
        }

        //validate phone number
        if (!inputs.phone){
            handleError('Please enter your phone number', 'phone');
            valid = false;
        }

        //validate password
        if (!inputs.password){
            handleError('Please input your phone password', 'password')
            valid = false;
        }else if(inputs.password.length < 5){
            handleError('Password must be greater than 5 characters', 'password')
            valid = false
        }
        if (valid){
            register();
        }
    }

    //register user function
    const register = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            try {
                AsyncStorage.setItem('user', JSON.stringify(inputs));
                navigation.navigate('LoginScreen');
            }catch(error){
                Alert.alert('Error', 'Something went wrong')
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
            style={[tw`text-blue-600`, {fontSize:40, fontWeight: 'bold'}]}
            >Register</Text>
            <Text 
            style={[tw`text-gray-500 my-2`, {fontSize:18, fontWeight: 'bold',}]}
            >Enter Your Details To Register</Text>
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
                label={'Full Name'} 
                iconName={'account-outline'} 
                placeholder='Enter your name'
                error={errors.fullname}
                onFocus={()=>{
                    handleError(null, 'fullname')
                }}
                onChangeText={text => handleOnChange(text, 'fullname')}
                />
                <Input 
                label={'Phone Number'} 
                iconName={'phone-outline'} 
                placeholder='Enter your phone number'
                keyboardType='numeric'
                maxLength={10}
                error={errors.phone}
                onFocus={()=>{
                    handleError(null, 'phone')
                }}
                onChangeText={text => handleOnChange(text, 'phone')}
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
                 title={'Register'} 
                 onPress={validate}
                 />
                 <Text 
                 style={[tw`text-black text-sm font-bold text-center mt-3`]}
                 onPress={()=>{
                    navigation.navigate('LoginScreen')
                 }}
                 >Already Have An Account? LOGIN </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})