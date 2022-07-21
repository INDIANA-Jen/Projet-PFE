import * as React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const MapsScreen = ({ navigation }) => {
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Maps" isHome={true} />
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Setting!</Text>
      
      </View>
      
    </SafeAreaView>
    );
  }
  function NotificationScreen ({navigation : {navigate}}) {
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Message Poubelle" isHome={true} />
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Setting!</Text>
      
      </View>
      
    </SafeAreaView>
    );
  }

  export default MapsScreen;