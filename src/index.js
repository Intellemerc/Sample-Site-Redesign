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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#f57c20',
  }
});

class App extends React.Component {
  constructor(){
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
  getDisplayMode(){
    //return 'pc';
    const {containerWidth, containerHeight} = this.props;
    if(containerWidth > 1024)
      return 'pc'
    if(containerWidth > 786)
      return 'tablet'
    return 'phone'
  }
  getPage(){
    const {page} = this.state;
    //{page === 'chart' ?  :  }
    switch(page){
      case 'chart':
        return <ChartsPage/>;
      break;
      case 'grid':
        return <GridPage />;
      break;
      case 'theme':
        return <ThemePage />
      break;
    }
  }
  changePage(page){
    this.setState({page: page})
  }
  render() {
      return <div style={{height: '100vh', width: '100vw'}}>
          <Header showMenu={this.toggle} displayMode={this.getDisplayMode()} />
          <div style={{display:'flex', height: '100vh', width: '100vw'}} >
            <Nav open={this.state.open}
                 displayMode={this.getDisplayMode()}
                 toggleMenu={this.toggle}
                 changePage={this.changePage}
            />
            {this.getPage()}
          </div>
      </div>
  }
}

App = Dimensions({containerStyle: {
  height: '100vh',
  width: '100vw'
}})(App);

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme} style={{height: '100vh', width: '100vw'}}><App/></MuiThemeProvider>, document.getElementById('root'));
