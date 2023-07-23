import { StyleSheet, Text, View,ScrollView,Image,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'

const TrendingComponent = () => {
    const API_KEY = "b93a64480573ce5248c28b200d79d029";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const movieData = async () => {
            await fetch(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            )
                .then((response) => response.json())
                .then((data) => setMovies(data.results))
        };
        movieData();
    }, []);
  return (
    <View>
      <Text style={{fontSize:20,color:'white'}}>Trending Now</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {
            movies.slice(0,10).map((movie,id)=>(
                <Pressable style={{flexDirection:'row',alignItems:'center'}} key={id}>
                    <Text style={{color:'white',textAlign:'center',justifyContent:'center',position:'absolute',fontSize:85,fontWeight:'800',zIndex:5,top:30}}>{id+1}</Text>
                    <Image
                    style={{height:110,width:150,resizeMode:'cover',borderRadius:5,margin:15}}
                    source={{ uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`}} 
                    />
                </Pressable>
            ))}
      </ScrollView>
    </View>
  )
}

export default TrendingComponent

const styles = StyleSheet.create({})