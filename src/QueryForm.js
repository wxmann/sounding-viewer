import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Viewport from './Viewport';
import fetchRaob from './fetchRaob';
import 'react-datepicker/dist/react-datepicker.css';

export default class QueryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station : null,
      raobDate: new Date(),
      soundingResult : null,
      isLoaded: false,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();

    let date = this.state.raobDate;
    let formData = {
      station : this.state.station,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: this.state.hour
    }

    try {
      let sounding = await fetchRaob(formData);
      this.setState({
        soundingResult: JSON.stringify(sounding),
        isLoaded: true,
        error: null
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoaded: false,
        error: error 
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Station:
            <input type="text" onChange={(e)=>this.setState({station: e.target.value})} />
          </div>
          <div>
            Date:
            <DatePicker
              selected={this.state.raobDate}
              onChange={(date) => this.setState({raobDate: date})}
            />
          </div>
          <div>
            Hour:
            <input type="int" onChange={(e) => this.setState({hour: e.target.value})} />
          </div>
          <input type="submit" value="Submit" />
        </form>

        <Viewport 
          soundingResult={this.state.soundingResult} 
        />
      </div>
    );
  }
}