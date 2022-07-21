import * as React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const PresentationDetail = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
        <CustomHeader title="Presentation du Produit"/>
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Home!</Text>
       
        </View>
        
      </SafeAreaView>
    );
  }

  export default PresentationDetail;