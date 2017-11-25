import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import store from './store';
import Routes from './routes';
import { nativeListener, nativeDispatch } from './helpers';

class RoutesContainer extends Component {
  componentWillMount() {
    const { routeName } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params: this.props })],
    });
    this.props.dispatch(resetAction);
  }

  getNavigation() {
    const { nav, dispatch, header } = this.props;
    return addNavigationHelpers({
      dispatch,
      header,
      state: nav,
    });
  }

  componentDidUpdate() {
    const navigation = this.getNavigation();
    nativeDispatch('NavigationEvent', { title: this.getTitle(), rootVc: this.isInitialPage() });
    nativeListener('NavigationEvent', navigation.goBack);
  }

  isInitialPage() {
    return this.props.nav.index === 0;
  }

  getTitle() {
    const { nav } = this.props;
    const { index } = nav;

    return nav.routes[index].params.title || '';
  }

  render() {
    const navigation = this.getNavigation();
    return <Routes navigation={navigation} />;
  }
}

const mapStateToProps = ({ nav }) => ({ nav });
const Router = connect(mapStateToProps)(RoutesContainer);

export default props => (
  <Provider store={store}>
    <Router {...props} />
  </Provider>
);
