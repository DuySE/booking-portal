import { connect } from 'react-redux';
import Login from '../../components/Login';
import {
  actions as LoginActions,
  selectors as LoginSelectors
} from '../../reducers/login';

const mapStateToProps = state => ({
  data: LoginSelectors.getData(state),
  error: LoginSelectors.getError(state)
});

const mapDispatchToProps = {
  login: LoginActions.login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
