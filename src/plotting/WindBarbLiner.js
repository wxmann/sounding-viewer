import React from 'react';
import {
  skewTWindBarbs
} from '../config/container';
import toSkewTCoord from '../transform/skewT-transform';
import WindBarb from './WindBarb';
import windBarbConfig from '../config/windbarb-config';

export default class WindBarbLiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundingData: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({soundingData: nextProps.soundingData});
    }
  }

  render() {
    let data = this.state.soundingData;
    if (data === null) {
      return null;
    } 

    return (
      <g id="windBarbLiner">
        {
          data.data.filter((val, i, arr) => {
            return i % windBarbConfig.deltaBarb == 0;
          }).filter(ob => {
            return ob.pressure !== null && ob.speed !== null && ob.direction !== null;
          }).map(ob => {
            let p = ob.pressure;
            let windspd = ob.speed;
            let winddir = ob.direction;

            let yCoord = toSkewTCoord(p, 0).y;
            let xCoord = skewTWindBarbs.width / 2;

            return (
              <WindBarb 
                windspd={windspd}
                winddir={winddir}
                coord={{x: xCoord, y: yCoord}}
              />
            );
          })
        }
      </g>
    )
  }
}