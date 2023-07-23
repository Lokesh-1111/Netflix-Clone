import { StyleSheet, Text, View,SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import React, { useState,useContext } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { MovieItem } from '../Context';

const ProfileScreen = (props) => {
  const {profile, setProfile} = useContext(MovieItem)
  console.log("selected profile :",profile)
    const profiles = [
        {
          id: "0",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
          name: "Pranav",
        },
        {
          id: "1",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
          name: "Sujan",
        },
        {
          id: "2",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
          name: "Kiran",
        },
        {
          id: "3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
          name: "Samarth",
        },
      ];
  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
        <View style={{flexDirection:'row',margin:12}}>
            <FontAwesome6 name={'arrow-left'} size={24} style={{margin:4}} color={'white'}/>
            <Text style={{fontSize:22,marginLeft:5,color:'white',fontWeight:'500'}}>Profiles and more</Text>
        </View>
        <View style={{alignItems:'center',marginTop:40}}>
            <Text style={{color:'#E50914',fontSize:40,fontWeight:'700'}}>NETFLIX</Text>
        </View>
        <View style={{alignItems:'center',marginTop:60}}>
            <Text style={{color:'gray',fontSize:20}}>Who's Watching?</Text>
            <View></View>
        </View>
        <View style={{alignItems:'center'}}>
        <FlatList numColumns={2} data={profiles} renderItem={({item})=>(
            <Pressable style={{alignItems:'center',margin:10,padding:20}} onPress={()=>{
              setProfile(item);
              props.navigation.navigate('Loading')
              }}>
                <Image style={{width:110,height:110,borderRadius:6}} source={{uri:item.image}}/>
                <Text style={{color:'white',textAlign:'center',fontSize:16,marginTop:10}}>{item.name}</Text>
            </Pressable>
        )} />
        </View>
        <Pressable style={{alignItems:'center'}} onPress={()=>props.navigation.navigate('Login')}>
            <Text style={{color:'gray',fontSize:20}}>Sign Out</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})