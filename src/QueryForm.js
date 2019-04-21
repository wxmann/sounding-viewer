import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Viewport from './Viewport';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchSounding } from './actions';
import { connect } from 'react-redux';

class QueryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station : null,
      raobDate: new Date()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    let date = this.state.raobDate;
    let formData = {
      station : this.state.station.toUpperCase(),
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: this.state.hour
    }

    this.props.dispatch(fetchSounding(formData));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>
            Station:
            <input type="text" onChange={(e)=>this.setState({station: e.target.value})} />
          </span>
          <span>
            Date:
            <DatePicker
              selected={this.state.raobDate}
              onChange={(date) => this.setState({raobDate: date})}
            />
          </span>
          <span>
            Hour:
            <input type="int" onChange={(e) => this.setState({hour: e.target.value})} />
          </span>
          <input type="submit" value="Submit" />
        </form>

        <Viewport />
      </div>
    );
  }
}

export default connect()(QueryForm);