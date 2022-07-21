import React from 'react';
import { Text, View, Image, TouchableOpacit} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
/*import { ImageBackground } from 'react-native-web';*/
import {ImageBackground} from "react-native";
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = (props) =>{
    return(
        <View style = {{flex:1}}>

        <DrawerContentScrollView {...props} contentContainerStyle = {{backgroundColor: '#6de89a'}}>
            <ImageBackground source={require('../image/sary3.jpg')} style={{padding: 20}}>
                <Image source={require('../image/sary.jpg')} style={{height:80, width:80, borderRadius: 40, marginBottom:10}}/>
                <Text style={{color: '#fff', fontSize:18/*, fontFamily: 'lucida grande'*/}}>Josea jessy</Text>
                </ImageBackground>
            <View style = {{flex:1, backgroundColor: '#fff', paddingTop:10}}>
            <DrawerItemList {...props}/>

            </View>
            
         
        </DrawerContentScrollView>
        <View style ={{padding:20, borderTopWidth:1, borderTopColor: '#ccc'}}>
         <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <FontAwesome name="sign-out" size={24} /*color="black"*/ />
         <Text style= {{fontSize: 15, marginLeft:5}}> Deconnecter</Text>
         </View>
         

         </TouchableOpacity>
         
        </View>
        </View>
        
    )
}

export default CustomDrawer;