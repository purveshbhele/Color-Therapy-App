import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';

export default class ShowImages extends Component{
  constructor(props){
    super(props);
    this.state={
      image:this.props.navigation.getParam('details')["img"],
    }
  }
 
  
  render(){
    var img=this.state.image
  
    return(
      <View>
      <Text style={{textAlign:'center',fontSize:30}}>
      {this.props.navigation.getParam('details')["name"]}
      </Text>
        <Image
         style={{width:RFValue(380),height:RFValue(520),margin:RFValue(25),alignItems:"center"}}
         source={img}
        />
      </View>
    )
  }
}