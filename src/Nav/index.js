import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import outsideClick from 'react-onclickoutside'
import {compose} from 'recompose'
import {Card, CardText} from 'material-ui/Card'
import IconMenu from 'material-ui/IconMenu';
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
      text: 'Grid'
    },
    {
      text: 'Chart'
    },
    {
      text: 'Theme'
    }
  ]
  render(){
    const {open, toggleMenu, displayMode, changePage} = this.props;
    //console.log(displayMode)
    const menuItems = this.menuItems.map((itm, idx) => <MenuItem onClick={() => changePage(itm.text.toLowerCase())} key={idx}>{itm.text}</MenuItem>);
    let navMenu;
    if(displayMode === 'phone'){
      navMenu = <Drawer open={open} docked={true}>
                    <AppBar title="Nav Menu"
                            style={{padding: 10, height: 95}}
                            iconElementLeft = {<IconButton
                                          style={{display: 'block', float: 'right'}}
                                          onClick={toggleMenu}
                                          tooltip="Close Menu"> <MenuIcon style={{color: 'white'}}/>
                                        </IconButton>
                                      }
                  />

                    {menuItems}
                </Drawer>
    }else{
      navMenu = <Card containerStyle={navStyle}><CardText>{menuItems}</CardText></Card>
    }

    return navMenu;
  }
}

export default compose(
  outsideClick
)(NavMenu);
