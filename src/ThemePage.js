import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';



import ColorButton from './ColorButton'

class ThemePage extends React.Component {
    constructor(){
      super();

      this.state = {
        displayColorPicker: false
      }
    }
    render() {
        const {theme, changePrimaryColor} = this.props;

        return <div style={{padding: 25}}>
                <div style={{padding: '0 0 20px 0'}}>
                  Primary Color: {theme.palette.primary1Color}
                </div>
                <ColorButton currentColor={theme.palette.primary1Color} onChangeComplete={changePrimaryColor} text="Primary Color"/>
              </div>
    }
}

export default ThemePage
