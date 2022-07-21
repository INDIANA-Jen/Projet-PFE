
import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/OnboardingScreen';
import ConditionScreen from './screens/ConditionScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UtilisateurScreen from './screens/UtilisateurScreen';

const AppStack = createNativeStackNavigator();

const App = () =>{
  
    return(
      <NavigationContainer>
      <AppStack.Navigator
        /*headerNode="none"*/
        screenOptions={{
          headerShown: false
        }}
      >

        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>

        <AppStack.Screen name="Condition" component={ConditionScreen}/>

        <AppStack.Screen name="Login" component={LoginScreen}/>

        <AppStack.Screen name="Register" component={RegisterScreen}/>

        <AppStack.Screen name="Utilisateur" component={UtilisateurScreen}/>


      </AppStack.Navigator>

    </NavigationContainer>
  );
} 

  
export default App;







/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

