import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity,  ScrollView, CheckBox } from 'react-native';
import { Ionicons, FontAwesome,Entypo } from "@expo/vector-icons"
import { Checkbox } from 'react-native-paper';

const ConditionScreen = ({ navigation }) => {
    const [check, setCheck] = React.useState(false);
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>Les conditions générales d'utilisateurs</Text>
             <Image

                    style={{
                        resizeMode: 'contain',
                        alignSelf: 'center',
                       
                        
                      }}
                    source={require('../images/logo2.png')}

             />

            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
            <Text style={styles.textes}> <Entypo name="controller-record" size={15} color="black" />Aide durant la crise du coronavirus</Text>
           
            <View style={styles.checkboxContainer}>
            <Checkbox
            status={check ? "checked" : "unchecked"}
            onPress={() => {setCheck(!check);}}
           /> 
           <Text style={styles.label}>Accepter</Text>

            </View>

            

              
            <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('Login')}>
          Se Connecter
        </Text>

       

            </ScrollView>
            </View>
           
        
    );
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: /*'#73eb71'*/ /*'#5bbd85'*/ '#6de89a'
        
    
    },

    text: {
        fontSize : 20,
        fontWeight: "bold",
        /*width: 400,*/
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
   
    },

    textes: {
        fontSize : 20,
        /*fontWeight: "bold",*/
        /*width: 400,*/
        height: 60,
   
    },
    registerTextStyle: {
        color: '#184ecc',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        padding: 10,
      },

      label: {
        margin: 8,
        fontSize: 18,
        color: '#184ecc',
        fontWeight: 'bold',
       
      },

      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
    
    



    

});

export default ConditionScreen;