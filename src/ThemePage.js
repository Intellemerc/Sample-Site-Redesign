import React from 'react'


import ColorButton from './ColorButton'

class ThemePage extends React.Component {
    constructor(){
      super();

      this.state = {
        displayColorPicker: false
      }
    }
    render() {
        //const {handleChangeComplete} = this.props;
        return <div><ColorButton text="Primary Color"/></div>
    }
}

export default ThemePage
