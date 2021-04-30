
 import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';

export default class AppInfo extends Component{
  render(){
    return( 
      <View style={{flex:1}}>
      <View>
      <MyHeader navigation={this.props.navigation} title="About"/>
      </View>
      <Text style={{color:'#000',fontSize:RFValue(30),fontWeight:350,textAlign:'center',fontFamily:'Sans-serif'}}>Welcome To</Text>
      <Image source={require("../assets/logo.jpg")} 
      style={{width:RFValue(250),height:RFValue(250),marginLeft:70,borderRadius:100}}/>
      <Text style={{color:'#000',fontSize:RFValue(35),fontWeight:350,textAlign:'center',fontFamily:'Sans-serif'}}>Color Therapy App</Text>
      <Text style={{color:'#000',fontSize:RFValue(27),fontWeight:330,fontFamily:'Sans-serif'}}>
      Different colours give off different wavelength frequencies and these different frequencies have different effects on physical and psychological functions and consequently different disorders.
      </Text>
      <Text style={{color:'#000',fontSize:RFValue(30),fontWeight:350,fontFamily:'Sans-serif'}}>
      Made By: Purvesh Bhele
      </Text>
      </View>
    )
  }
}