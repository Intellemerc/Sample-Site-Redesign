import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import outsideClick from 'react-onclickoutside'
import {compose} from 'recompose'
import {Card, CardText} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar'

const navStyle = {
  width: 200,
  height: '100vh',
  flex: .2
}

class NavMenu extends React.Component{
  handleClickOutside(evt){
    const {open, toggleMenu} = this.props;
    if(open){
      toggleMenu();
    }
  }
  menuItems = [
    {
      text: 'GridList'
    },
    {
      text: 'GridReduce'
    },
    {
      text: 'GridHorizontal'
    },
    // {
    //   text: 'Chart'
    // },
    // {
    //   text: 'Theme'
    // },
    // {
    //   text: 'Form'
    // }
  ]

  render(){
    const {open, toggleMenu, displayMode, changePage, theme, isVodafone} = this.props;


    const navTheme = {
      backgroundColor: isVodafone ? '#ccc' : theme.palette.accent1Color
    }
    //console.log(displayMode)
    const menuItems = this.menuItems.map((itm, idx) => <MenuItem onClick={changePage.bind(null, itm.text.toLowerCase())} key={idx}>{itm.text}</MenuItem>);
    let navMenu;
    if(displayMode === 'tablet' || displayMode === 'phone'){
      navMenu = <Drawer open={open} docked={true} containerStyle={navTheme}>
                    <AppBar title="Nav Menu"
                            style={{padding: 10, height: 95}}
                            iconElementLeft={<IconButton
                                          style={{display: 'block', float: 'right'}}
                                          onClick={toggleMenu}
                                          tooltip="Close Menu"> <MenuIcon style={{color: 'white'}}/>
                                        </IconButton>
                                      }
                  />

                    {menuItems}
                </Drawer>
    }else{
      const combStyle = {
        ...navStyle,
        ...navTheme
      }
      navMenu = <Card containerStyle={combStyle}><CardText>{menuItems}</CardText></Card>
    }

    return navMenu;
  }
}

export default compose(
  outsideClick
)(NavMenu);
