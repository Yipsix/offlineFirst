import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { fetchUser } from '../../action-creators';

export interface Props {
  user: string;
  fetchUser: typeof fetchUser;
};

class login extends React.Component<Props, {}> {
  
  handleClick(event: any) {
    console.log('clicked');
  }

  public render() {

    const style = {
      margin: 15,
    };

    return (
      <div>
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
      </div>
    );
  }
}

export default login;
