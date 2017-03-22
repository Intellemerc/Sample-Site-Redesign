import React from 'react';
import Dimensions from 'react-dimensions'

import ChartsPage from './ChartsPage';
import Nav from './Nav'
import Header from './Header'
import GridPageReduce from './GridPage_ReduceCol'
import GridPageList from './GridPage_ListView'
import GridPageHor from './GridPage_HorScroll'
import ThemePage from './ThemePage'
import FormPage from './FormPage'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            page: 'gridreduce',
            isVodafone: false
        }
        this.toggle = this
            .toggle
            .bind(this);
        this.changePage = this
            .changePage
            .bind(this);
        this.toggleIsVodafone = this
            .toggleIsVodafone
            .bind(this);

    }
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    toggleIsVodafone() {
        var currentState = this.state.isVodafone;
        this.setState({
            isVodafone: !currentState
        });
        const primary = currentState
            ? '#f57c20'
            : '#E60000';
        const secondary = currentState
            ? '#1e90ff'
            : '#1F8FFF';
        this
            .changeColorActions
            .changeThemeColors({primary, secondary});
        //this.changeColorActions.changeSecondaryColor();
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
    getPage(theme) {
        const {page} = this.state;
        const {containerWidth, containerHeight} = this.props;
        //{page === 'chart' ?  :  }
        switch (page) {
            case 'chart':
                return <ChartsPage
                    displayMode={this.getDisplayMode()}
                    dimensions={{
                    containerWidth,
                    containerHeight
                }}/>;
                break;
            case 'gridreduce':
                return <GridPageReduce displayMode={this.getDisplayMode()}/>;
                break;
            case 'gridlist':
                return <GridPageList displayMode={this.getDisplayMode()}/>;
                break;
            case 'gridhorizontal':
                return <GridPageHor displayMode={this.getDisplayMode()}/>;
                break;
            case 'theme':
                //const {}
                return <ThemePage
                    toggleCarrier={this.toggleIsVodafone}
                    theme={theme}
                    changeColorActions={this.props.changeColorActions}/>
                break;
            case 'form':
                return <FormPage/>;
                break;
        }
    }
    changePage(page) {
        this.setState({page: page, open: false})
    }
    render() {
        const {changeColorActions, theme} = this.props;
        this.changeColorActions = changeColorActions;
        return <div
            style={{
            height: '100vh',
            width: '100vw'
        }}>
            <Header showMenu={this.toggle} displayMode={this.getDisplayMode()}/>
            <div
                style={{
                display: 'flex',
                height: '100vh',
                width: '100vw'
            }}>
                <Nav
                    isVodafone={this.state.isVodafone}
                    open={this.state.open}
                    theme={theme}
                    displayMode={this.getDisplayMode()}
                    toggleMenu={this.toggle}
                    changePage={this.changePage}/> {this.getPage(theme, changeColorActions)}
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
