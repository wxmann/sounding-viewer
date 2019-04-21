import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class NoSoundingDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    };
  }
  
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let { query } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogContent>
            <DialogContentText id="noSoundingFound">
              {`No Observations found for ${query.station} at
              ${query.month.toString().padStart(2, "0")}/${query.day.toString().padStart(2, "0")}/${query.year} 
              ${query.hour.toString().padStart(2, "0")}:00 UTC!`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NoSoundingDialog;