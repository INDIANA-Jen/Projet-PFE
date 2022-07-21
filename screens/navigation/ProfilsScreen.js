import * as React from 'react';
import { Text, View, SafeAreaView, Button} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const ProfilsScreen = ({ navigation }) => {
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

  export default ProfilsScreen;