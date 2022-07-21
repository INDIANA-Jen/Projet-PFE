import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity,  Button, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './navigation/HomeScreen';
import HomeScreenDetail from './navigation/HomeScreenDetail';
import PresentationDetail from './navigation/PresentationDetail';
import ActuDetail from './navigation/ActuDetail';
import ProtectionDetail from './navigation/ProtectionDetail';
import CustomDrawerContent from './navigation/CustomDrawerContent';
import ProfilsScreen from './navigation/ProfilsScreen';
import MapsScreen from './navigation/MapsScreen';
import PoubellesScreen from './navigation/PoubellesScreen';
import NotificationScreen from './navigation/NotificationScreen';

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
        <Drawer.Screen name="Poubelle" component={PoubellesScreen} />
        <Drawer.Screen name="Maps" component={MapsScreen} />
        <Drawer.Screen name="Notification" component={NotificationScreen} />
        </Drawer.Navigator>   
    </NavigationContainer>
  );
}


