import React from 'react';
import {
  skewTWindStaffArea, upperPadding
} from '../config/container';
import toSkewTCoord from '../transform/skewT-transform';
import WindBarb from './WindBarb';
import windBarbConfig from '../config/windbarb-config';

function densityAdjustBarbs(data) {
  let result = [];

  let pushOb2 = (ob1, ob2) => {
    let p0 = ob1.pressure,
        p1 = ob2.pressure;
      
    return Math.abs(p0 - p1) > adjustedDeltaBarb(p0);
  }

  for (let i = 0; i < data.length; i++) {
    let ob = data[i];
    if (i === 0 || result.length === 0) {
      result.push(ob);
    } else if (pushOb2(ob, result[result.length - 1])) {
      result.push(ob);
    }
  }
  return result;
}

function adjustedDeltaBarb(p) {
  return (p / 1000) * windBarbConfig.deltaBarb;
}

export default class WindStaff extends React.Component {
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
          densityAdjustBarbs(
            data.data.filter(ob => {
              return ob.pressure !== null && ob.speed !== null && ob.direction !== null;
            })
          ).map(ob => {
            let p = ob.pressure;
            let windspd = ob.speed;
            let winddir = ob.direction;

            let yCoord = toSkewTCoord(p, 0).y + upperPadding;
            let xCoord = skewTWindStaffArea.width / 2;

            if (yCoord < upperPadding) {
              return null;
            }

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