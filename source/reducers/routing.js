import { Map } from 'immutable';
import AppNavigator from '../routes';

export default (state = Map(), action = {}, nav) => {
  let navigation;

  switch (action.type) {
    case 'Navigation/NAVIGATE':
    case 'Navigation/RESET':
    case 'Navigation/BACK':
      navigation = AppNavigator.router.getStateForAction(action, nav);
      return state.mergeDeep(navigation.routes[navigation.index]);
    default:
      return state;
  }
};
