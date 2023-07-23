import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import movieUrl from '../data/movieUrls'
import MovieRow from './Movierow'

const MovieRows = () => {
    const data = movieUrl;
    console.log(data);
  return (
    <View>
      {
        data.map((movie)=>(          
        <MovieRow title={movie.name} url={movie.url}/>
        ))
      }
    </View>
  )
}

export default MovieRows

const styles = StyleSheet.create({})