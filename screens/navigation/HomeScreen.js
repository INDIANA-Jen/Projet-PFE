import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../navigation/CustomHeader';

const HomeScreen = ({navigation}) => 
/*function HomeScreen({navigation : {navigate}}) */
{

    /*la partie de bouton dans le home */
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Home" isHome={true}/>
        <View style={{flex: 1,justifyContent:'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
        /*le guide d’utilisation*/
        style = {{marginTop: 20,
        
          shadowColor: 'rgba(0,0,0, .4)', 
          shadowOffset: { height: 1, width: 1 }, 
          shadowOpacity: 1, 
          shadowRadius: 1, 
          backgroundColor: '#fff',
          elevation: 2, 
          height: 90,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6de89a',
          flexDirection: 'row',
          marginBottom: 1,
          borderRadius: 8,
          paddingVertical: 0,
          paddingHorizontal: 30,
          marginVertical: 20, 
          marginHorizontal: 10,
          elevation: 20,
        }}
  
        
        onPress={() => navigation.navigate ('HomeDetail')}
       /* title = " Go Home Detail !"*/
        >
           <Image
          
            source={require('../../images/questions.png')}
          />
          <Text>Le guide d’utilisation</Text>
        
  
        </TouchableOpacity>
         
        <TouchableOpacity
        /*Presentation */
        style = {{marginTop: 20,
          shadowColor: 'rgba(0,0,0, .4)', 
          shadowOffset: { height: 1, width: 1 }, 
          shadowOpacity: 1, 
          shadowRadius: 1, 
          backgroundColor: '#fff',
          elevation: 2, 
          height: 90,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6de89a',
          flexDirection: 'row',
          marginBottom: 1,
          borderRadius: 8,
          paddingVertical: 0,
          paddingHorizontal: 30,
          marginVertical: 20,
          marginHorizontal: 10,
          elevation: 20,  
         
        }}
        onPress={() => navigation.navigate ('Presentation')}
       /* title = " Go Home Detail !"*/
        >
          <Image
          
          source={require('../../images/presentation.png')}
        />
          <Text>Presentation</Text>
        
  
        </TouchableOpacity>
        <TouchableOpacity
        /*Atualités / évènement*/
        style = {{marginTop: 20,
          shadowColor: 'rgba(0,0,0, .4)', 
          shadowOffset: { height: 1, width: 1 }, 
          shadowOpacity: 1, 
          shadowRadius: 1, 
          backgroundColor: '#fff',
          elevation: 2, 
          height: 90,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6de89a',
          flexDirection: 'row',
          marginBottom: 1,
          borderRadius: 8,
          paddingVertical: 0,
          paddingHorizontal: 30,
          marginVertical: 20,
          marginHorizontal: 10,
          elevation: 20,
        }}
        onPress={() => navigation.navigate ('Actu')}
       /* title = " Go Home Detail !"*/
        >
           <Image
          
          source={require('../../images/newspaper.png')}
        />
          <Text>Atualités / évènement</Text>
        
  
        </TouchableOpacity>
        <TouchableOpacity
        /* Protection de l'environnement*/
        style = {{marginTop: 20,
          shadowColor: 'rgba(0,0,0, .4)', 
          shadowOffset: { height: 1, width: 1 }, 
          shadowOpacity: 1, 
          shadowRadius: 1, 
          backgroundColor: '#fff',
          elevation: 2, 
          height: 90,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6de89a',
          flexDirection: 'row',
          marginBottom: 1,
          borderRadius: 8,
          paddingVertical: 0,
          paddingHorizontal: 30,
          marginVertical: 20,
          marginHorizontal: 10,
          elevation: 20,
        }}
        onPress={() => navigation.navigate ('Protection')}
       /* title = " Go Home Detail !"*/
        >
          <Image
          
          source={require('../../images/eco.png')}
        />
          <Text> Protection de l'environnement </Text>
        
  
        </TouchableOpacity>
      
       
        </View>
        
      </SafeAreaView>

    );
  }

  
  
  
  
  
  export default HomeScreen;