import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'

const LoadingScreen = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Home')
        },1000)
    },[])   

  return (
    <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
      <View>
      <Text style={{color:'red',fontSize:24,marginVertical:10}}>Loading</Text>
      <ActivityIndicator size={'large'} color={'red'}/>
      </View>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})