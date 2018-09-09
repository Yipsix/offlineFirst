import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightTheme from '../src/style/theme';
import login from './components/login';

class App extends React.Component {

  handleClick(event: any) {
      console.log('clicked');
  }
  
  public render() {

    const style = {
      margin: 15,
     };

    return (
      <div className="App">
        <MuiThemeProvider muiTheme={lightTheme}>
         <login/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
