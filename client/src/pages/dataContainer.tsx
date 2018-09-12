import * as React from 'react';
import { signIn } from '../store/login/actions';
import Login from './login';
import { ApplicationState } from '../store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Grid from '@material-ui/core/Grid';
import Datacaller from './dataCaller';

interface Props {
  loading: boolean;
  isAuthenticated: boolean;
  user: string;
}

const style = {
  height: '100%'
};

class DataContainer extends React.Component<Props> {
  public render() {
    
    return (
      <div style={style}>
        <h3>auth: {this.props.isAuthenticated.toString()}</h3>
        <h3>user: {this.props.user}</h3>
        <h3>offline: true/false</h3>
        {this.props.isAuthenticated ? (<Datacaller/>) : (<Grid
          style={style}
          container={true}
          alignItems="center"
          justify="center"
        >
          <Login />
        </Grid>)}
        
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
)(DataContainer);
