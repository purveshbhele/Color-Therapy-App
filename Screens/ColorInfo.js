import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';

export default class ColorInfo extends Component{
  render(){
    return(
      <View>
      <MyHeader navigation={this.props.navigation} title="Color Therapy"/>
      <View>
      <Image source={require("../assets/black1.jpg")}style={{width:RFValue(60),height:RFValue(60)}}/>
      <Text style={{fontSize:RFValue(30),fontWeight:100,fontFamily:'Sans-serif'}}>Black Color is to balance</Text>
      <Image source={require("../assets/blue.png")}style={{width:RFValue(60),height:RFValue(60)}}/>
      <Text  style={{fontSize:RFValue(30),fontWeight:100,fontFamily:'Sans-serif'}}>Blue Color is to lower the Pain</Text>
      <Image source={require("../assets/green.png")}style={{width:RFValue(60),height:RFValue(60)}}/>
      <Text  style={{fontSize:RFValue(30),fontWeight:100,fontFamily:'Sans-serif'}}>Green Color gives Healing Effect</Text>
      <Image source={require("../assets/red.png")} style={{width:RFValue(60),height:RFValue(60)}}/>
      <Text  style={{fontSize:RFValue(30),fontWeight:100,fontFamily:'Sans-serif'}}>Red Color is to increase the Energy</Text>
      </View>
      </View>
    )
  }
}