import * as React from 'react';
import { signIn } from '../store/login/actions';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface Props {
    loading: boolean;
    isAuthenticated: boolean;
    user: string;
    signIn: typeof signIn;
}
  
class DataCaller extends React.Component<Props> {

  public render() {

    return (
      <div>
          logged in
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
    loading: auth.loading,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    signIn: () => dispatch(signIn())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DataCaller);