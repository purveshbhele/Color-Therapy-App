import * as React from 'react';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class MyHeader extends React.Component{
render(){
  return(
    <SafeAreaProvider>
    <Header
    leftComponent={<Icon name='bars' color='#295f2d' size={25} onPress={()=>this.props.navigation.toggleDrawer()}/>}
    centerComponent={{text:"Color Therapy",style:{color:'#295f2d',fontSize:20,fontWeight:"bold"}}}
    backgroundColor="#ffe67c"/>
    </SafeAreaProvider>
  )
}
}