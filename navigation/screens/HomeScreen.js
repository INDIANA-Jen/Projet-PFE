

/*import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;*/
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, TextInput, onChangeNumber, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome, Ionicons, AntDesign, MaterialIcons, MaterialCommunityIcons, Fontisto  } from '@expo/vector-icons';

import ActuScreen from '../contenu/ActuScreen';
import GuideScreen from '../contenu/GuideScreen';
import InfoScreen from '../contenu/InfoScreen';
import PresentationScreen from '../contenu/PresentationScreen';







const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer  independent={true}>

    <Stack.Navigator headerNode="none">

     <Stack.Screen

        name="Home"
        component={HomeScreen}
        options={{ /*title: 'Bienvenue sur mon application' */headerShown: false}}
        />
   
    
   
   <Stack.Screen name="Actu" component={ActuScreen}/>
   <Stack.Screen name="Guide" component={GuideScreen}/>
   <Stack.Screen name="Info" component={InfoScreen}/>
   <Stack.Screen name="Presentation" component={PresentationScreen}/>

   </Stack.Navigator>
   </NavigationContainer>

);
};

const HomeScreen = ({ navigation }) => {
  
  return (

    /*
       <View>
       
       <Button
        title="Urgence"
        color = "#f194ff"
           onPress={() =>
              navigation.navigate('Urgence', {name: 'pour calculer la somme '}) /*que j rajouter 
      }
     />
      
  
  </View>*/

  <View style={styles.container}>
      
         

         
             <View style={styles.box}>
               <View style={styles.inner}>
                 <Text onPress={() => navigation.navigate('Guide')}>
                <FontAwesome name="hospital-o" size={22} color="red"/>jjn</Text>

               </View>
             </View>
             <View style={styles.box}>
               <View style={styles.inner}>
                 <Text onPress={() => navigation.navigate('Guide')}>
                <FontAwesome name="hospital-o" size={22} color="red"/>bhh</Text>

               </View>
             </View>
             <View style={styles.box}>
               <View style={styles.inner}>
                 <Text onPress={() => navigation.navigate('Guide')}>
                <FontAwesome name="hospital-o" size={22} color="red"/>bhh</Text>

               </View>
             </View>
             <View style={styles.box}>
               <View style={styles.inner}>
                 <Text onPress={() => navigation.navigate('Guide')}>
                <FontAwesome name="hospital-o" size={22} color="red"/>bhh</Text>

               </View>
             </View>
             
            
            
            
</View>
);
};

const styles = StyleSheet.create({

  container:{
 
      /*flex: 1,*/
      padding: 5,
      width : '100%',
      height: '85%',
      padding : 6,
      flexDirection: 'row',
      flexWrap: 'wrap',
      
      /*justifyContent: 'center',*/
     

     
  
    },
box:{
  /*textAlign: 'center',
  backgroundColor: 'white',
  alignSelf: 'center',
  fontSize: 20,
  fontWeight: '600',
  marginBottom: 1,
  width: '95%',
  borderRadius: 8,
  paddingVertical: 30,
  paddingHorizontal: 30,
  marginVertical: 20,
  marginHorizontal: 10,
  elevation: 20,
  shadowColor: '#52006A',*/

  width: '50%',
  height: '50%',
  padding : 5
  

},

inner : {
  flex: 1, 
  alignItems : 'center',
  justifyContent : 'center',
  /*backgroundColor: /*'#0084FF'*/
  shadowColor: '#52006A',
  backgroundColor: 'white',
  fontSize: 20,
  fontWeight: '600',
  marginBottom: 1,
  borderRadius: 8,
  paddingVertical: 30,
  paddingHorizontal: 30,
  marginVertical: 20,
  marginHorizontal: 10,
  elevation: 20,
  shadowColor: '#52006A',

  
  

},




 
});

  
 

  
        
  
  
 
  export default MyStack;
  





