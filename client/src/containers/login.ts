
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Actions from '../action-creators/index';
import { LoginState } from '../App-state';
import LoginComponent from '../components/login';


import { Props as LoginProps } from '../components/login';

type StateProps = Pick<LoginProps, 'user'>;
type DispatchProps = Pick<LoginProps, 'fetchUser'>;


function mapStateToProps(state: LoginState): StateProps {
  return { user: state.user };
};

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    fetchUser: () => {
      dispatch(Actions.fetchUser());
    },
  };
};

const ConnectedGreeting = connect(
  mapStateToProps,
  mapDispatchToProps,
)<{}>(LoginComponent);

export default ConnectedGreeting;