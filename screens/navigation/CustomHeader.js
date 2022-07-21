import * as React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CustomHeader = ({title, isHome,  /*navigation*/ /*useNavigation*/}) => {
    const navigation = useNavigation();
    return(
  
      <View style={{flexDirection: 'row', height: 50}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {
              isHome?
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{width: 30, height: 30, marginLeft: 5}}
                  source = {require ('../../images/list.png')}
                  resizeMode="contain"
                  />
              </TouchableOpacity>
              :
            <TouchableOpacity style= {{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {navigation.goBack();}}
            
              /*title = "Back"*/
            /* onPress={() => this.props.navigation.goBack()}*/ >
           <Image style={{width: 25, height:25, marginLeft: 5}}
                    source = {require ('../../images/left.png')}
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

  export default CustomHeader;