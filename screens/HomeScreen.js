import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TrendingComponent from '../components/TrendingComponent'
import MovieRows from '../components/MovieRows'

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <Header />
        <TrendingComponent />
        <MovieRows />
    </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})