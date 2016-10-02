import React from 'react'
import Button from 'material-ui/RaisedButton'
import { ChromePicker } from 'react-color'

class ColorButton extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const {text} = this.props;
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <div>
        <Button onClick={ this.handleClick } style={{padding: 10}}>{text}</Button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ChromePicker />
        </div> : null }
      </div>
    )
  }
}

export default ColorButton
