import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) =>{
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return(
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor 

            }}
        />
    );
}
const Skip = ({... props}) =>(
    <Button
        title= 'Skip'
        color = /*'#73eb71'*/ /*'#7db383'*//* '#5bbd85'*/ /*'#3ddeab'*/ '#6de89a' 

        {... props}
    
    />
);
const Next = ({... props}) =>(
    <Button
        title= 'Next'
        color = /*'#73eb71'*/ /*'#5bbd85'*/ /*'#3ddeab'*/ '#6de89a'
        {... props}
    
    />
);

const Done = ({... props}) =>(
   <TouchableOpacity
        style = {{marginHorizontal:10}}
        {... props}
   >
       <Text style={{fontSize: 16}}>Done</Text>

   </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
         SkipButtonComponent={Skip}
         NextButtonComponent={Next}
         DoneButtonComponent={Done}
         DotComponent={Dots}

        onSkip={ ()=> navigation.replace("Condition")}
        onDone={()=> navigation.navigate("Condition")}

        /*titleStyles={{ color: 'black', fontSize: 50 }}*/

     pages={[

    {
      backgroundColor: /*'#2dd42a'*/ /*'#8ef28d'*/ /*'#73eb71'*/ /*'#5bbd85'*/ /*'#3ddeab'*/ '#6de89a',
      
      image:  <Image source={require('../images/poubelle4.png')} />,
      /*image: <Image source={require('../images/image1.jpg')} />,*/
      title: 'SMARTBIN', 
      titleStyles: { color: 'black', fontSize: 40 },
      subtitle: 'Bienvenue dans notre application!',
      subTitleStyles : {fontFamily: 'sans-serif-medium', color: 'black', fontSize: 24, /*fontWeight: '500'*/}
      
    },

    {
        backgroundColor: /*'#73eb71'*/ /*'#5bbd85'*/ '#6de89a',
        image: <Image source={require('../images/Cartes.png')} />,
        title: 'Nos service :',
        titleStyles: {  fontFamily: 'sans-serif', color: 'black', fontSize: 40 },
        subtitle: "Localisation de la SmartBin en temps réel grâce à l'application mobile.",
        subTitleStyles : {fontWeight: '700',fontFamily: 'sans-serif-light',color: 'black', fontSize: 20}
      },
      {
        backgroundColor: /*'#73eb71'*/ '#6de89a',
        image: <Image source={require('../images/Throw.png')} />,
        title: 'Onboarding 3',
        titleStyles: { color: 'black', fontSize: 40 },
        subtitle: 'Done with React Native Onboarding Swiper dfonsijfdvbjdfbvfdbvifdbvkfdjnvijlfdnvidfnvkjfdsnvkjdfbvkidfbvdfbvdjkcbjscbjds',
        subTitleStyles : {color: 'black', fontSize: 20}
    },

    {
        backgroundColor: /*'#73eb71'*/ '#6de89a',
        image: <Image source={require('../images/message.png')} />,
        title: 'Onboarding 3',
        titleStyles: { color: 'black', fontSize: 40 },
        subtitle: 'Done with React Native Onboarding Swiper dfonsijfdvbjdfbvfdbvifdbvkfdjnvijlfdnvidfnvkjfdsnvkjdfbvkidfbvdfbvdjkcbjscbjds',
        subTitleStyles : {color: 'black', fontSize: 20}
    },

    {
        backgroundColor: /*'#73eb71'*/ '#6de89a',
        image: <Image source={require('../images/pana.png')} />,
        title: 'Onboarding 3',
        titleStyles: { color: 'black', fontSize: 40 },
        subtitle: 'Done with React Native Onboarding Swiper dfonsijfdvbjdfbvfdbvifdbvkfdjnvijlfdnvidfnvkjfdsnvkjdfbvkidfbvdfbvdjkcbjscbjds',
        subTitleStyles : {color: 'black', fontSize: 20}
    },

    {
        backgroundColor: /*'#73eb71'*/ '#6de89a',
        image: <Image source={require('../images/vi.png')} />,
        title: 'Onboarding 3',
        titleStyles: { color: 'black', fontSize: 40 },
        subtitle: 'Done with React Native Onboarding Swiper dfonsijfdvbjdfbvfdbvifdbvkfdjnvijlfdnvidfnvkjfdsnvkjdfbvkidfbvdfbvdjkcbjscbjds',
        subTitleStyles : {color: 'black', fontSize: 20}
    },
    {
        backgroundColor: /*'#73eb71'*/ '#6de89a',
        image: <Image source={require('../images/vo.png')} />,
        title: 'Onboarding 3',
        titleStyles: { color: 'black', fontSize: 40 },
        subtitle: 'Done with React Native Onboarding Swiper dfonsijfdvbjdfbvfdbvifdbvkfdjnvijlfdnvidfnvkjfdsnvkjdfbvkidfbvdfbvdjkcbjscbjds',
        subTitleStyles : {color: 'black', fontSize: 20}
    },
    
  ]}
/>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },

   

});