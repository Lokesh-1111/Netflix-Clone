import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import plans from '../data/plans';

const PlanScreen = ({ navigation, route }) => {
    const data = plans;
    const [selected, setSelected] = useState('')
    const [price, setPrice] = useState('')
    console.log(selected)
    console.log(price)
    return (
        <>
            <ScrollView style={{ padding: 10 }}>
                <View>
                    <Text style={{ fontSize: 18, marginTop: 10, color: 'black', fontWeight: '500' }}>Choose your plan that is right for you</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 5, marginVertical: 3 }}>
                    <FontAwesome6 name={"check"} size={20} color='#E50914' style={{ paddingTop: 4 }} />
                    <Text style={{ fontSize: 18, marginLeft: 6, color: 'black', fontWeight: '600' }}>Watch all you want Ad free</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <FontAwesome6 name={"check"} size={20} color='#E50914' style={{ paddingTop: 4 }} />
                    <Text style={{ fontSize: 18, marginLeft: 6, color: 'black', fontWeight: '600' }}>Recommendation Just for you</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <FontAwesome6 name={"check"} size={20} color='#E50914' style={{ paddingTop: 4 }} />
                    <Text style={{ fontSize: 18, marginLeft: 6, color: 'black', fontWeight: '600' }}>Change or cancel your plan anytime</Text>
                </View>
                {
                    data.map((item, index) => (
                        <Pressable key={index} onPress={() => {
                            setSelected(item.name),
                                setPrice(item.price)
                        }} style={selected.includes(item.name) ? styles.planselected : styles.planBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.devices}>
                                    <Text style={{ color: 'white', padding: 5, fontWeight: '500', fontSize: 16 }}>{item.name}</Text>
                                </View>
                                <Text style={styles.price}>Price :<FontAwesome6 name={"indian-rupee-sign"} size={16} />{item.price}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <View >
                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Video Quality: {item.videoQuality}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Resolution:{item.resolution}</Text>
                                </View>
                                <FontAwesome6 name={'n'} size={20} style={{ paddingTop: 10, color: 'black' }} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                <View>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Devices you can watch :</Text>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 4 }}>
                                    {
                                        item.devices.map((cont, indices) => (
                                            <View key={indices} style={{ marginHorizontal: 2 }}>
                                                <FontAwesome6 name={cont.name} size={25} color={'red'} />
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        </Pressable>
                    ))
                }
            </ScrollView>
            {
                selected?<Pressable style={styles.priceShown}>
                <View>
                    <Text style={{fontSize:19,color:'white'}}>Selected plan {selected}</Text>
                </View>
                <Pressable onPress={()=>navigation.navigate('Login')}>
                <View>
                    <Text style={{fontSize:19,color:'white'}}>Price {price}</Text>
                </View>
                </Pressable>
            </Pressable> : null
            }
        </>
    )
}

export default PlanScreen

const styles = StyleSheet.create({
    planBox: {
        height: 160,
        borderWidth: 1,
        borderColor: '#E50914',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    planselected: {
        height: 160,
        borderWidth: 2.5,
        borderColor: '#E50914',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    devices: {
        // borderColor:'#E50914',
        // borderWidth:2,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#E50914',
        borderRadius: 8
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    },
    priceShown:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        backgroundColor:'#E50914',
        alignItems:'center',
        paddingHorizontal:10
    }
})