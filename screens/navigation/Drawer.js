import { StackNavigator } from "react-navigation";
import HomeScreenDetail from './HomeScreenDetail';
import ProfilsScreen from './ProfilsScreen';

const Drawer = StackNavigator(
  {
	Home: {
	  screen: HomeScreenDetail,
	  navigationOptions: {
		header: {
		  visible: false
		}
	  }
	},
Profils: {
	  screen: ProfilsScreen,
	  navigationOptions: {
		header: {
		  visible: false
		}
	  }
	}
  },
  {
	initialRouteName: "Home"
  }
);

export default Drawer;