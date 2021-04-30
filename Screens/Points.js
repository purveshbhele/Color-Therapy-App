import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,FlatList,TouchableHighlight,ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader';
import { ListItem } from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';


const list=[
  {
    name:'Back Pain',
    img:require("../assets/BackPain.png")
  },
  {
    name:'Stomach Pain',
    img:require("../assets/StomachPain.png")
  },
  {
    name:'Knee Pain',
    img:require("../assets/KneePain.png")
  },
  {
    name:'Toe Pain',
    img:require("../assets/ToePain.png")
  },
  {
    name:'Headache',
    img:require("../assets/Headache.png")
  },
  {
    name:'Joints Pain',
    img:require("../assets/JoinsPain.png")
  },
  {
    name:'Acidity',
    img:require("../assets/Acidity.png")
  },
  {
    name:'Eyes Problem',
    img:require("../assets/EyesProblem.png")
    
  },
  {
    name:'Ears Problem',
    img:require("../assets/EarsProblem.png")
  },
  {
    name:'Neck Pain',
    img:require("../assets/NeckPain.png")
  },
  {
    name:'Sun Stroke',
    img:require("../assets/SunStroke.png")
  },
  {
    name:'Cold',
    img:require("../assets/Cold.png")
  },
  {
    name:'Cough',
    img:require("../assets/Cough.png")
  },
  {
    name:'Tooth Pain',
    img:require("../assets/ToothPain.png")
  },
  {
    name:'Constipation',
    img:require("../assets/Constipation.png")
  },
  {
    name:'LoseMotion/Diarrhoea',
    img:require("../assets/LoseMotion.png")
  }
]


export default class Points extends Component{

   goToNextScreen = (item) => {
  this.props.navigation.navigate('ShowImages',{"details":item})
 //alert(item.name);
     }


  keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    
    <ListItem.Content>
      
      <TouchableHighlight 
      onPress={()=>{
       this.goToNextScreen(item)
      } } style={{width:RFValue(370),
    height:50,
    justifyContent: 'center',
    alignItems: 'center',borderRadius: 2,
    backgroundColor: '#ffe67c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,}}>
      <Text style={{color: '#295f2d', fontWeight: '200', fontSize: 20 }}>{item.name}</Text>
      </TouchableHighlight>
    </ListItem.Content>
  </ListItem>
)


  render () {
  return (
    <ScrollView>
<MyHeader navigation={this.props.navigation} title="Color Therapy"/>
    <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
    </ScrollView>
  )
}
}