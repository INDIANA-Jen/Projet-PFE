import * as React from 'react';
import { Text, View, SafeAreaView, Image, Button, TextInput } from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const PoubellesScreen = ({ navigation }) => {

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Poubelle"  isHome={true} />
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text style={{
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 0,
      width: 300,
      height: 100,
     
      }}> Bienvenue, vous souhaitez ajouter ou supprimer la poubelle? </Text>
      <Image
        style={{
        /*resizeMode: 'contain',
         alignSelf: 'left',*/
        
      
       }}
      source={require('../../images/logo1.png')}
      />
      <Text style={{/*textAlign: 'center',*/ fontWeight: 'bold', fontSize: 18, marginTop: 0,width: 300,height: 40,}}> 
      Id poubelle </Text>
  
        <TextInput
            style={{height: 40, margin: 12, borderWidth: 2, padding: 10,  marginTop: 0, width: 300}}
            /*placeholder="Id"*/
            keyboardType="default"
            
           
        />
  
        <View style={{ flexDirection: 'row' , justifyContent: 'space-between', width: 300, height: 40, 
          marginVertical: 5,
          /*marginHorizontal: 100,*/
      
      }}>
         
         <Button 
          color =  '#6de89a'
          title="Ajouter "
         
         
          onPress={() => Alert.alert('Ajouter')}
        />
         
          
          <Button
            color =  '#6de89a'
            title="Supprimer"
            onPress={() => Alert.alert('Supprimer')}
          />
        </View>
      </View>
      
    </SafeAreaView>
    );
  }

  export default PoubellesScreen;