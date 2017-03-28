import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.userReducer.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default UserIsAuthenticated;
