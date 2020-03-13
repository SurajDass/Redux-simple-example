import React, { Component } from 'react';
import {
  
  View,
  Text,
  
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';


class CounterApp extends Component {



  render() {
    
    return (
        
      <View  style={{flex:1,flexDirection:"row", justifyContent:"center", alignContent:"center", alignItems:"center", backgroundColor:"red"}}>
        <Text 
        style={{ position:"absolute", top:5, fontSize:50, fontWeight:"bold", textDecorationLine:"underline"}}
        >COUNTER</Text>
        <TouchableOpacity style={{margin:20, backgroundColor:"blue",borderWidth:1, height:70,width:70, alignItems:"center"}} onPress={()=>this.props.increase()}>
<Text style={{fontWeight:"bold", fontSize:50, color:"white"}}>+</Text>
        </TouchableOpacity>
    <Text style={{fontWeight:"bold", fontSize:50, color:"white", backgroundColor:"blue",borderWidth:1, height:70,width:70, textAlign:"center"}} >{this.props.count}</Text>
        <TouchableOpacity style={{margin:20, backgroundColor:"blue",borderWidth:1, height:70,width:70, alignItems:"center"}} onPress={()=>this.props.decrease()}>
<Text style={{fontWeight:"bold", fontSize:50, color:"white"}}>-</Text>
        </TouchableOpacity>
       
      </View>
    )
  }
}
function mapStateToProps(state)
{
    return{
        count:state.count
    }
}
function mapDispatchToProps(dispatch)
{
    return {
    increase:()=>dispatch({type:'Increase'}),
    decrease:()=>dispatch({type:'Decrease'}),
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)