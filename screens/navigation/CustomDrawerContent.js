import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';

const CustomDrawerContent = (props) => {
    return(
      <SafeAreaView style = {{flex: 1, backgroundColor: '#6de89a'}}>
        <View style={{height:150, alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('../../images/user.png')}
          style={{height:120, width:120, borderRadius:60}}
          />
        </View>
  
        <ScrollView style = {{marginLeft: 6}}>
  
        <TouchableOpacity
        style = {{marginTop: 20}}
        onPress={() => {/*navigation.*/props.navigation.navigate('Home')}}
       /* title = " Go Home Detail !"*/
        >
          <Text>Home</Text>
        
  
        </TouchableOpacity>
        <TouchableOpacity
        style = {{marginTop: 20}}
        onPress={() =>{ /*navigation.*/props.navigation.navigate ('Profils')}}
       /* title = " Go Home Detail !"*/
       >
          <Text>Profil</Text>
        
  
        </TouchableOpacity>

        <TouchableOpacity
        style = {{marginTop: 20}}
        onPress={() =>{ /*navigation.*/props.navigation.navigate ('Poubelle')}}
       /* title = " Go Home Detail !"*/
       >
          <Text>Poubelle</Text>
        
  
        </TouchableOpacity>

        <TouchableOpacity
        style = {{marginTop: 20}}
        onPress={() =>{ /*navigation.*/props.navigation.navigate ('Maps')}}
       /* title = " Go Home Detail !"*/
       >
          <Text>Maps</Text>
        
  
        </TouchableOpacity>

        <TouchableOpacity
        style = {{marginTop: 20}}
        onPress={() =>{ /*navigation.*/props.navigation.navigate ('Notification')}}
       /* title = " Go Home Detail !"*/
       >
          <Text>Notification</Text>
        
  
        </TouchableOpacity>
  
        </ScrollView>
  
      </SafeAreaView>
    )
  }

  export default CustomDrawerContent;