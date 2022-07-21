import React, { useEffect, useCallback,  useState} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView, Image,  ScrollView, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {

    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = useCallback(formData => {
      console.log(formData);
    }, []);
    const onChangeField = useCallback(
      name => text => {
        setValue(name, text);
      },
    );
  
    useEffect(() => {
      register('email');
      register('prenom');
      register('nom');
      register('adresse');
      register('password');
  
    }, [register]);
    const [value, setValue1] = React.useState('oui');

     return (

    <View style={styles.container}>
         <ScrollView style={styles.scrollView}>
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


     <Text style={styles.title}> Bienvenue dans notre application ! </Text>
     <Text style={styles.title}> Inscription:  </Text>
         
         <Text style={styles.tex}>Nom: </Text>

        <TextInput
          style={styles.input}

          keyboardType="default"
          textContentType="familyName"
          placeholder="Nom"
          onChangeText={onChangeField('nom')}
        />

        <Text style={styles.tex}>Adresse Email: </Text>
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Votre adresse mail"
          onChangeText={onChangeField('email')}
        />

       
        <Text style={styles.tex}>Adresse</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          textContentType="fullStreetAddress"
          placeholder="Votre adresse:"
          onChangeText={onChangeField('adresse')}
        />
      <Text style={styles.tex}>Mot de passe</Text>
       <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Mot de passe"
          onChangeText={onChangeField('password')}
        />

       <Text style={styles.tex}>Confirmer le mot de passe</Text>
       <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Confirmer le mot de passe"
          onChangeText={onChangeField('password')}
        />


        <Text style={styles.text}>Les conditions générales d'utilisateurs</Text>
        <RadioButton.Group onValueChange={newValue => setValue1(newValue)} value={value}>
          <RadioButton.Item style={styles.radio} label="Accepter" value="Accepter" />
        </RadioButton.Group>
        <Text></Text>
        
        <Button title="S'enregistrer"
          /*onPress={handleSubmit(onSubmit) }*/
          onPress={() => alert('vous etes enregistrer')}
        />
        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('Login')}>
          Se Connecter
        </Text>


       </ScrollView>
      
    </View>
  
  )};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      padding: 24,
      /*alignItems: 'center',
      justifyContent: 'center',*/
      backgroundColor: /*'#73eb71'*/ /*'#5bbd85'*/ '#6de89a'

  },


input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  radio: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    padding: 10,
  },
  registerTextStyle: {
    color: '#184ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },

  title: {

    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  

  },
  text: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold"
  },
  scrollView: {
    /*backgroundColor: 'white',*/
    marginHorizontal: 4,
  },

  tex: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    height: 19,
  },


});

export default RegisterScreen;