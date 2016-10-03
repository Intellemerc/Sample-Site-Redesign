import React from 'react';
import Dimensions from 'react-dimensions'

import ChartsPage from './ChartsPage';
import Nav from './Nav'
import Header from './Header'
import GridPage from './GridPage'
import ThemePage from './ThemePage'

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
        this.setState({page: page, open: false})
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

export default App;
