import React, { useEffect, useCallback,  useState} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView, Image, Button } from 'react-native';
import { useForm } from 'react-hook-form';

const LoginScreen = ({ navigation }) => {

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register('email');
    register('password');
    
  }, [register]);
  

  return (

    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.container}>



<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 3, backgroundColor: 'black'}} />
  <View>
  <Image
      style={{
      /*resizeMode: 'contain',
       alignSelf: 'left',*/
   
    
     }}
    source={require('../images/logo1.png')}
    />
  </View>
  <View style={{flex: 1, height: 3, backgroundColor: 'black'}} />
</View>

<Text  style={styles.text}>
  Bienvenue dans notre application ! 
</Text>

<Text  style={styles.texte}>
 Vous voulez Connecter ? 
</Text>
<Text style={styles.textes}>Inserer les information suivant : </Text>

     <Text style={styles.textess}>Adresse Email:</Text>
      <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.textess}>Mot de passe:</Text>
     
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <Button title="Se Connecter"
          /*onPress={handleSubmit(onSubmit) }*/
          onPress={() => navigation.navigate('Utilisateur')}
          
        />
        
        <Text
          style={styles.registerTextStyles}
          onPress={() => navigation.navigate('Register')}>
          Oublier le mot de passe ?
        </Text>
      
        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('Register')}>
          Nouveau ? S'enregistrer
        </Text>
      
     

   


      
      
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      padding: 24,
      /*alignItems: 'center',
      justifyContent: 'center',*/
      backgroundColor: /*'#73eb71'*/ /*'#5bbd85'*/ '#6de89a'

  },

  text: {
    /*fontSize : 20,
    fontWeight: "bold",
    /*width: 400,*/
   /* height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",*/
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    width: 300,
    height: 80,
  

},

texte: {
  /*fontSize : 20,
  /*width: 400,*/
 /* height: 60,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",*/
  textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    width: 300,
    height: 50,
},

textes: {
  fontSize : 20,
  /*width: 400,*/
   height: 60,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
 
},

textess: {
  color: "#000",
  fontSize: 18,
  fontWeight: "bold",
  height: 40,
},

/*button: {
  backgroundColor: '#f194ff',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
},*/
buttonOutline: {
  backgroundColor: 'white',
  marginTop: 5,
  borderColor: '#252626',
  borderWidth: 2,
},
buttonOutlineText: {
  color: '#252626',
  fontWeight: '700',
  fontSize: 16,
},

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},

registerTextStyle: {
  color: '#184ecc',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  alignSelf: 'center',
  padding: 28,
},

registerTextStyles: {
  color: '#184ecc',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  alignSelf: 'center',
  padding: 28,
},


});
export default LoginScreen;