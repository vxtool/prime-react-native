import AppNavigator from '../routes';

export default (state = null, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};