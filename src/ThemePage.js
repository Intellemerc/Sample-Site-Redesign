import React from 'react'
import Toggle from 'material-ui/Toggle'




import ColorButton from './ColorButton'

class ThemePage extends React.Component {
    constructor(){
      super();

      this.state = {
        displayColorPicker: false
      }
    }
    render() {
        const {theme, changeColorActions, toggleCarrier} = this.props;

        //console.log(theme)
        return <div style={{padding: 25}}>
                <Toggle
                  label="Toggle Vodafone"
                  onToggle={toggleCarrier}
                />
                <div style={{padding: '0 0 20px 0'}}>
                  Primary Color: {theme.palette.primary1Color}
                  <br />
                  Secondary Color: {theme.palette.accent1Color}
                </div>
                Primary: <ColorButton currentColor={theme.palette.primary1Color} onChangeComplete={changeColorActions.changePrimaryColor} text="Primary Color"/>
                <br />
                Secondary: <ColorButton currentColor={theme.palette.accent1Color} onChangeComplete={changeColorActions.changeSecondaryColor} text="Secondary Color"/>
              </div>
    }
}

export default ThemePage
