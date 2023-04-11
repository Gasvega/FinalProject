import { View,Image,Text } from "react-native";

export default function Notification( {navigation,props} ) { 



    return (

        <View style={{flex:1,backgroundColor:'white'}}>

            <View style={{flexDirection:'row',marginTop:10,marginLeft:10}}>
            <Image source={require("../../assets/Notification.png")}/>

            <View style={{marginLeft:20,justifyContent:'space-between'}}>
            <Text style={{fontFamily:'bold',fontSize:18}}>공지</Text>
            <Text style={{fontFamily:'bold',color:'gray'}}>가입을 환영합니다!</Text>
            <Text style={{fontFamily:'bold',color:'gray'}}>2023-04-09</Text>
            </View>
            
            </View>
        </View>


    )


}

