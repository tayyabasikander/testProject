
import React, { Component,useRef } from 'react'
import {View ,Text ,StyleSheet,ScrollView, KeyboardAvoidingView} from 'react-native'
import {Item,Input } from 'native-base'

const Conversations =({ route, navigation })=>{
    const [text,setText]= React.useState('')
// class Conversations extends Component{
    // state = {
    //     userInfo:this.props.navigation.getParam('item')
    // }
      const { item } = route.params;
      console.log("item123",item)
    // componentDidMount(){
// console.log("userinfo from conversations",this.state.userInfo)
    // }
    // render(){
        // const { params } = this.props.navigation.state;
        // const userInfo = params ? params.item : null;
        // console.log("userinfo",userInfo)
        return(
            <KeyboardAvoidingView behavior={'padding'} 
            keyboardVerticalOffset={150}
            >
                
          

            
            <View
            //  style={s.container}
             >
                 <View style={s.chatHeader}>
                    {/* <Text>{item.name}</Text> */}
                    <View style={s.pic}></View>
                           <View style={{marginTop:12,marginLeft:10}}>
                           <Text style={s.inboxUsersName}>{item.name}</Text>
                           </View>
                           
                 </View>
                 <View style={{height:'85%'}}></View>
                 <View style={{flex: 1,alignContent:'flex-end',}}>
                 <Item style={s.inputStyle} rounded>

                    <Input
                        style={s.inputTextStyle}
                        placeholder="Enter your text"
                        // placeholderTextColor='black'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={text}
                        onChangeText={(x) => setText(x)}

                    />

                    </Item>
                    
                 </View>
            
        </View> 
        </KeyboardAvoidingView>
        )
    // }
}

const s = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:"center",
        alignSelf:"center"
    },
    chatHeader:{
        backgroundColor:'lightblue',
        padding: 0,
        flexDirection:"row",
        // height:'10%'
    },
    pic:{
        height:30,
        backgroundColor:'grey',
        width:30,
        margin:10,
    borderRadius:30
    },
    inboxUsersName:{
        fontSize:18
    },
    inputStyle: {
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 0,margin:10,
        // backgroundColor:"red",
        height:40,
        // flex: 1,
    }, 
})

export default Conversations

