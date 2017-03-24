import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import DialogExampleSimple from './TutorialDiag'

import logo from '../CTLogo.jpg'


export default({showMenu, displayMode}) => {
    return <AppBar title="Test Account"
                  iconElementLeft={
                    <div>
                      <img alt="Logo" src={logo} style={{height:50, display:'block'}}/>
                      {displayMode === 'phone' ? <IconButton
                                  style={{display: 'block'}}
                                  onClick={showMenu}
                                  tooltip="Main Menu"> <MenuIcon style={{color: 'white'}}/>
                      </IconButton> : null}
                    </div>
                  }
                  iconElementRight={
                    <DialogExampleSimple>Tutorials</DialogExampleSimple>
                  }
            />
};
