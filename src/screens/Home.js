
import React, { Component } from 'react'
import {View ,Text ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// const Home =()=>{
class Home extends Component{
    render(){
        return(
            <View style={s.container}>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Inbox')}>
                <Text>Inbox</Text>
            </TouchableOpacity>
        </View> 
        )
    }
}

const s = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:"center",
        alignSelf:"center"
    }
})

export default Home

