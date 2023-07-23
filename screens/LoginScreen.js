import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableHighlight,Pressable } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword]  = useState('')
    console.log(email)
    console.log(password)
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View>
        <Text style={styles.heading}>NETFLIX</Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.InputContainer}>
        <TextInput
        value={email}
        onChangeText={(text) =>setEmail(text)}
        placeholder='EMAIL'
        placeholderTextColor={'white'}
        style={styles.input}
        />
        <TextInput
        value={password}
        onChangeText={(text) =>setPassword(text)}
        placeholder='PASSWORD'
        placeholderTextColor={'white'}
        secureTextEntry={true}
        style={styles.input}
        />
      </View>
      <TouchableHighlight onPress={()=>props.navigation.navigate('Profile')}>
        <Text style={styles.btn}>Sign In</Text>
      </TouchableHighlight>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>
        <Text style={{color:'white',marginHorizontal:10,fontSize:16}}>New to Netflix?</Text>
      <Pressable style={{color:'white'}} onPress={()=>props.navigation.navigate('Register')}>
        <Text style={{color:'white'}} >Sign Up Now</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        paddingTop:40
    },
    heading:{
        color:'red',
        fontSize:40,
        fontWeight:'700'
    },
    input:{
        backgroundColor:'gray',
        marginVertical:20,
        paddingHorizontal:20,
        borderRadius:10,
        fontSize:15,
        color:'white'
    },
    btn:{
        color:'white',
        borderWidth:2,
        backgroundColor:'black',
        width:300,
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:17,
        textAlign:'center',
        borderColor:'white',
        marginTop:20
    },
    InputContainer:{
        width:300,
        marginTop:45

    }
})