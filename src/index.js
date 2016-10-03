import React from 'react';
import ReactDOM from 'react-dom';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dimensions from 'react-dimensions'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ChartsPage from './ChartsPage';
import Nav from './Nav'
import Header from './Header'
import GridPage from './GridPage'
import ThemePage from './ThemePage'

injectTapEventPlugin();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            page: 'theme'
        }
        this.toggle = this.toggle.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    getDisplayMode() {
        //return 'pc';
        const {containerWidth, containerHeight} = this.props;
        if (containerWidth > 1024)
            return 'pc'
        if (containerWidth > 786)
            return 'tablet'
        return 'phone'
    }
    getPage(theme, changeColorActions) {
        const {page} = this.state;
        //{page === 'chart' ?  :  }
        switch (page) {
            case 'chart':
                return <ChartsPage/>;
                break;
            case 'grid':
                return <GridPage/>;
                break;
            case 'theme':
                //const {}
                return <ThemePage theme={theme} changeColorActions={changeColorActions}/>
                break;
        }
    }
    changePage(page) {
        this.setState({page: page})
    }
    render() {
        const {changeColorActions, theme} = this.props;
        return <div style={{
            height: '100vh',
            width: '100vw'
        }}>
            <Header showMenu={this.toggle} displayMode={this.getDisplayMode()}/>
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '100vw'
            }}>
                <Nav open={this.state.open} displayMode={this.getDisplayMode()} toggleMenu={this.toggle} changePage={this.changePage}/>
                {this.getPage(theme, changeColorActions)}
            </div>
        </div>
    }
}

App = Dimensions({
    containerStyle: {
        height: '100vh',
        width: '100vw'
    }
})(App);

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
