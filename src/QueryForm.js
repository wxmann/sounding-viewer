import React, { Component } from 'react';
import { fetchSounding } from './actions';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

class QueryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station : null,
      raobDate: new Date(),
      hour: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return event => {
      this.setState({[name]: event.target.value})
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    let date = this.state.raobDate;
    let formData = {
      station : this.state.station.toUpperCase(),
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate(),
      hour: this.state.hour
    }

    this.props.dispatch(fetchSounding(formData));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} align="center">
          <TextField
            id="stationField"
            error ={this.props.error}
            label="Station"
            onChange={this.handleChange('station')}
            margin="dense"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="dateField"
            error ={this.props.error}
            label="Date"
            type="date"
            onChange={e => this.setState({raobDate: new Date(Date.parse(e.target.value))})}
            variant="outlined" 
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            select
            id="hourField"
            error ={this.props.error}
            label="Hour"
            onChange={this.handleChange('hour')}
            variant="outlined" 
            margin="dense"
            SelectProps={{
              native: true,
            }}
          >
            {[0, 12, 18, 6].map(hrOption => (
              <option value={hrOption}>{hrOption}</option>
            ))}
          </TextField>

          <Button
            type="submit"
            onSubmit={this.handleSubmit}
            variant="contained"
          >
            Submit
          </Button>

        </form>
      </div>
    );
  }
}

const stateToProps = function(state) {
  return {
    error: state.error
  }
}

export default connect(stateToProps)(QueryForm);