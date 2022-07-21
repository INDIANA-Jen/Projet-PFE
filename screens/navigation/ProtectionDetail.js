import * as React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const ProtectionDetail = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }} navigation={navigation}>
        <CustomHeader title="Protection de l'environnement"/>
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Home!</Text>
       
        </View>
        
      </SafeAreaView>
    );
  }

  export default ProtectionDetail;