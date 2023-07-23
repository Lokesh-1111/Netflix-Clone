import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView,Pressable} from 'react-native'
import React,{useEffect,useState} from 'react'

const MovieRow = ({title,url}) => {
    const API_KEY = "b93a64480573ce5248c28b200d79d029";
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const movieData = async () => {
            await fetch(
                url
            )
                .then((response) => response.json())
                .then((data) => setMovies(data.results))
        };
        movieData();
    }, []);
  return (
    <View>
          <Text style={{color:'white',fontSize:20}}>{title}</Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {
            movies.map((movie)=>(
                <Pressable>
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

export default MovieRow

const styles = StyleSheet.create({})