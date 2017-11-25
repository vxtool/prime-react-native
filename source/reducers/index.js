import nav from './nav';
import routing from './routing';

const rootReducer = (state = {}, action) => {
  return Object.assign({}, state, {
    nav: nav(state.nav, action),
    routing: routing(state.routing, action, state.nav),
  });
};

export default rootReducer;