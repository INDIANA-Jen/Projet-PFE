import * as React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';

const NotificationScreen = ({ navigation }) => {
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Message Poubelle" isHome={true} />
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Setting!</Text>
      
      </View>
      
    </SafeAreaView>
    );
  }

  export default NotificationScreen;