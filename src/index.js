import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App'

injectTapEventPlugin();

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
    }
    changePrimaryColor(color) {
        const newTheme = getMuiTheme({
            palette: {
                primary1Color: color.hex,
                accent1Color: this.state.theme.palette.accent1Color
            }
        });

        this.setState({theme: newTheme});
    }
    changeSecondaryColor(color){
      const newTheme = getMuiTheme({
          palette: {
              primary1Color: this.state.theme.palette.primary1Color,
              accent1Color: color.hex
          }
      });

      this.setState({theme: newTheme});
    }
    render() {
        const {theme} = this.state;

        return <MuiThemeProvider muiTheme={theme} style={{
            height: '100vh',
            width: '100vw'
        }}><App changeColorActions={{changePrimaryColor: this.changePrimaryColor, changeSecondaryColor: this.changeSecondaryColor}} theme={theme}/></MuiThemeProvider>
    }
}
ReactDOM.render(
    <ThemeWrapper/>, document.getElementById('root'));
