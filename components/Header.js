import { StyleSheet, Text, View, ImageBackground,Image,Pressable } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { MovieItem } from '../Context';
import {useNavigation} from '@react-navigation/native'

const Header = (props) => {
    const navigation = useNavigation();
    const {profile} = useContext(MovieItem)
    const API_KEY = "b93a64480573ce5248c28b200d79d029";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const movieData = async () => {
            await fetch(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            )
                .then((response) => response.json())
                .then((data) => setMovies(data.results[Math.floor(Math.random() * data.results.length - 1)]
                )
                );
        };
        movieData();
    }, []);
    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: 480, position: 'relative' }}
                resizeMode='cover'
                source={{ uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}` }}
            >
                <View style={{ margin: 20,flexDirection:'row',justifyContent:'space-between' }}>
                    <View>
                        <Text style={{ color: 'red', fontSize: 40, fontWeight: '700' }}>NETFLIX</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <FontAwesome6 name={'magnifying-glass'} size={30} style={{paddingTop:16,paddingHorizontal:18}}/>
                        <Pressable onPress={()=>navigation.navigate('Profile')}>
                        <Image 
                        style={{height:40,width:40}}
                        source={{uri:profile.image}}
                        borderRadius={4}
                        marginTop={10}
                        />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>TV SHOWS</Text>
                    <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>MOVIES</Text>
                    <Text style={{fontSize:20,color:'white',fontWeight:'600'}}>CATEGORIES</Text>
                </View>
            </ImageBackground>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:16}}>
                <View style={{alignItems:'center'}}>
                    <FontAwesome6 name={'plus'} color={'white'} size={24} />
                    <Text style={{color:'white'}}>My List</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'white',padding:4,borderRadius:10,width:90,height:35}}>
                    <FontAwesome6 name={'play'} color={'black'} size={24} style={{paddingHorizontal:8}}/>
                    <Text style={{color:'black'}}>Play</Text>
                </View>
                <View>
                    <FontAwesome6 name={'circle-info'} color={'white'} size={24} />
                    <Text style={{color:'white'}}>Info</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})