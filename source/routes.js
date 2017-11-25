import { StackNavigator } from 'react-navigation';
import HomePage from './pages/home';

const navigationOptions = ({ navigation }) => {};

export default StackNavigator({
  home: {
    screen: HomePage,
    navigationOptions,
  },
});
