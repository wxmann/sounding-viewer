import React, { Component } from 'react';
import * as d3 from 'd3';

export default class SkewT extends Component {

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    const svg = d3.select("body").append("svg").attr("width", 700).attr("height", 300);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="skewT" />
    )
  }
}