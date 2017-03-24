import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class OrderGridDetails extends React.Component {
  constructor(){
    super();

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <span>
        <a onClick={this.handleOpen} style={{color: 'blue', cursor: 'pointer'}}> details</a>
        { this.state.open ? <Drawer
          title="Dialog With Actions"
          open={this.state.open}
          width={this.state.open ? '100%' : undefined}
          onRequestClose={this.handleClose}
          openSecondary={true}
          docked={false}
        >
          <Paper style={{height: '100%', textAlign: 'left'}} zDepth={2}>
            <Paper style={{height: '32%', margin: '1%'}}>
              <div style={{margin: 0, padding: 10}}>
                <h3 style={{margin: 0}}>Client Info</h3>
                Omited for brevity
              </div>
            </Paper>
            <Paper style={{height: '30%', margin: '1%'}}>
              <div style={{margin: 0, padding: 10}}>
                <h3 style={{margin: 0}}>Service Details</h3>
                Omited for brevity
              </div>
            </Paper>
            <Paper style={{height: '30%', margin: '1%'}}>
              <div style={{margin: 0, padding: 10}}>
                <h3 style={{margin: 0}}>History</h3>
                Omited for brevity
              </div>
            </Paper>
            <Paper style={{height: '5%', textAlign: 'right', margin: '1%'}}>
              <FlatButton
                label="Cancel"
                onClick={this.handleClose}
              />
              <FlatButton
                label="Submit"
                onClick={this.handleClose}
              />
            </Paper>
          </Paper>
        </Drawer> : null }
      </span>
    );
  }
}

export default OrderGridDetails;