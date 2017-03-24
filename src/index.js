import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App'

class ThemeWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            theme: getMuiTheme({
                palette: {
                    primary1Color: '#f57c20',
                    accent1Color: '#1F8FFF',
                    secondaryTextColor: '#fff'
                }
            })
        }

        this.changePrimaryColor = this.changePrimaryColor.bind(this);
        this.changeSecondaryColor = this.changeSecondaryColor.bind(this);
        this.changeThemeColors = this.changeThemeColors.bind(this);
    }
    changeThemeColors({primary = null, secondary = null}){
      const newTheme = getMuiTheme({
          palette: {
              primary1Color: primary || this.state.theme.palette.primary1Color,
              accent1Color: secondary || this.state.theme.palette.accent1Color
          }
      });

      this.setState({theme: newTheme});
    }
    changePrimaryColor(color) {
        this.changeThemeColors({primary: color.hex})
    }
    changeSecondaryColor(color){
      this.changeThemeColors({secondary: color.hex})
    }
    render() {
        const {theme} = this.state;

        return <MuiThemeProvider muiTheme={theme} style={{
            height: '100%',
            width: '100%'
        }}><App changeColorActions={{
                    changePrimaryColor: this.changePrimaryColor,
                    changeSecondaryColor: this.changeSecondaryColor,
                    changeThemeColors: this.changeThemeColors}}
          theme={theme}/>
      </MuiThemeProvider>
    }
}
ReactDOM.render(
    <ThemeWrapper/>, document.getElementById('root'));
