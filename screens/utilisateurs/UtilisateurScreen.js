import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity,  Button, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome, MaterialIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

function CustomHeader({title, isHome,  /*navigation*/ /*useNavigation*/}){
  const navigation = useNavigation();
  return(

    <View style={{flexDirection: 'row', height: 50}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {
            isHome?
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={{width: 30, height: 30, marginLeft: 5}}
                source = {require ('../images/list.png')}
                resizeMode="contain"
                />
            </TouchableOpacity>
            :
          <TouchableOpacity style= {{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {navigation.goBack();}}
          
            /*title = "Back"*/
          /* onPress={() => this.props.navigation.goBack()}*/ >
         <Image style={{width: 25, height:25, marginLeft: 5}}
                  source = {require ('../images/left.png')}
                  resizeMode = "contain"/>

           <Text> Back</Text>
          
        </TouchableOpacity>
            
          }
        
      </View>
      
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>

    </View>
  )
} 

function HomeScreen({navigation : {navigate}}) {

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

      
      onPress={() => /*navigation.*/navigate ('HomeDetail')}
     /* title = " Go Home Detail !"*/
      >
         <Image
        
          source={require('../images/questions.png')}
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
      onPress={() => /*navigation.*/navigate ('Presentation')}
     /* title = " Go Home Detail !"*/
      >
        <Image
        
        source={require('../images/presentation.png')}
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
      onPress={() => /*navigation.*/navigate ('Actu')}
     /* title = " Go Home Detail !"*/
      >
         <Image
        
        source={require('../images/newspaper.png')}
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
      onPress={() => /*navigation.*/navigate ('Protection')}
     /* title = " Go Home Detail !"*/
      >
        <Image
        
        source={require('../images/eco.png')}
      />
        <Text> Protection de l'environnement </Text>
      

      </TouchableOpacity>
    
     
      </View>
      
    </SafeAreaView>
  );
}

/* navigation des boutton */

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
      <CustomHeader title="Le guide d’utilisation"/>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Home!</Text>
     
      </View>
      
    </SafeAreaView>
  );
}


function PresentationDetail ({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
      <CustomHeader title="Presentation du Produit"/>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Home!</Text>
     
      </View>
      
    </SafeAreaView>
  );
}

function ActuDetail ({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
      <CustomHeader title="Atualités / évènement"/>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Home!</Text>
     
      </View>
      
    </SafeAreaView>
  );
}
function ProtectionDetail ({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
      <CustomHeader title="Protection de l'environnement"/>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Home!</Text>
     
      </View>
      
    </SafeAreaView>
  );
}


/*dans le menu*/


function PoubellesScreen ({navigation : {navigate}}) {
  
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
    source={require('../images/logo1.png')}
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

function MapsScreen ({navigation : {navigate}}) {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Maps" isHome={true} />
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
    <Text>Setting!</Text>
    
    </View>
    
  </SafeAreaView>
  );
}
function NotificationScreen ({navigation : {navigate}}) {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Message Poubelle" isHome={true} />
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
    <Text>Setting!</Text>
    
    </View>
    
  </SafeAreaView>
  );
}





/* dans drawer*/

function ProfilsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <CustomHeader title="Profils" navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>Profils</Text>
    </View>
   
    </SafeAreaView>
  );
}
function CustomDrawerContent(props){
  return(
    <SafeAreaView style = {{flex: 1, backgroundColor: '#6de89a'}}>
      <View style={{height:150, alignItems: 'center', justifyContent:'center'}}>
        <Image source={require('../images/user.png')}
        style={{height:120, width:120, borderRadius:60}}
        />
      </View>

      <ScrollView style = {{marginLeft: 6}}>

      <TouchableOpacity
      style = {{marginTop: 20}}
      onPress={() => /*navigation.*/props.navigation.navigate ('Home')}
     /* title = " Go Home Detail !"*/
      >
        <Text>Home</Text>
      

      </TouchableOpacity>
      <TouchableOpacity
      style = {{marginTop: 20}}
      onPress={() => /*navigation.*/props.navigation.navigate ('Profils')}
     /* title = " Go Home Detail !"*/
     >
        <Text>Profil</Text>
      

      </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}

/*les tables dans home*/
const Tab = createBottomTabNavigator();

const StackHome = createNativeStackNavigator()
function HomeStack () {
  return(
    <StackHome.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName = "Home" >
      <StackHome.Screen name='Home' component={HomeScreen} />
      <StackHome.Screen name='HomeDetail' component={HomeScreenDetail} />
      <StackHome.Screen name='Presentation' component={PresentationDetail}/>
      <StackHome.Screen name='Actu' component={ActuDetail}/>
      <StackHome.Screen name='Protection' component={ProtectionDetail}/>
    </StackHome.Navigator>
    
)}

/*les boutton menu */
const StackSetting = createNativeStackNavigator()

function PoubellesStack () {
  return(
    <StackSetting.Navigator 
    screenOptions={{
      headerShown: false
    }}
    initialRouteName = "Setting" >
      <StackSetting.Screen name='Setting' component={PoubellesScreen}/>
    </StackSetting.Navigator>
    
)}

function MapsStack () {
  return(
    <StackSetting.Navigator 
    screenOptions={{
      headerShown: false
    }}
    initialRouteName = "Setting" >
      <StackSetting.Screen name='Setting' component={MapsScreen}/>
    </StackSetting.Navigator>
    
)}
function NotificationStack () {
  return(
    <StackSetting.Navigator 
    screenOptions={{
      headerShown: false
    }}
    initialRouteName = "Setting" >
      <StackSetting.Screen name='Setting' component={NotificationScreen}/>
    </StackSetting.Navigator>
    
)}



/*tab navigation*/
function TabNavigator(){
  return(


    <Tab.Navigator
     
    /*screenOptions={{
     headerShown: false
   }}*/

   screenOptions={({ route }) => ({
     tabBarIcon: ({ focused, color, size }) => {
       let iconName;

       if (route.name === 'Homes') {
         iconName = focused
           ? require ('../images/homes.png')
           : require ('../images/house.png');
       } 
       else if (route.name === 'Poubelles') {
        iconName = focused 
        ? require ('../images/poubelles.png')
        : require ('../images/bin.png');
       
      }
      else if (route.name === 'Maps') {
        iconName = focused 
        ? require ('../images/pins.png')
        : require ('../images/pin.png');
       
      }

      else if (route.name === 'Notification') {
        iconName = focused 
        ? require ('../images/notifications.png')
        : require ('../images/notification.png');
       
      }
        

       // You can return any component that you like here!
       return <Image source={iconName} style={{width: 20, height: 20}}
       resizeMode="contain"/>;
     },
     tabBarActiveTintColor: 'green',
     tabBarInactiveTintColor: 'black',
   })}
 >
 
   <Tab.Screen  options={{headerShown: false}} name="Homes" component={HomeStack} />
   <Tab.Screen  options={{headerShown: false}} name="Poubelles" component={PoubellesStack}/>
   <Tab.Screen  options={{headerShown: false}} name="Maps" component={MapsStack}/>
   <Tab.Screen  options={{headerShown: false}} name="Notification" component={NotificationStack} />
  
 </Tab.Navigator>

  );
    
    
  
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
        screenOptions={{
     headerShown: false
   }}
      initialRouteName="Home" drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profils" component={ProfilsScreen} />
        </Drawer.Navigator>   
    </NavigationContainer>
  );
}


