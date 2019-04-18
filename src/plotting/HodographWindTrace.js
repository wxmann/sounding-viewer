import React from 'react';

import toHodographCoord from '../transform/hodo-transform';
import { getPathStr } from '../utils/plot-helpers';
import { hodographArea } from '../config/container';

function partitionTrace(data) {
  let [ km03, km36, km69, kmGT9 ] = [ [], [], [], [] ]
  data.forEach(ob => {
    if (ob === null || ob.height === null || ob.speed === null || ob.direction === null) {
      return;
    }
    if (ob.height <= 3000) {
      km03.push(ob);
    } else if (ob.height <= 6000) {
      km36.push(ob);
    } else if (ob.height <= 9000) {
      km69.push(ob);
    } else if (ob.height <= 12000) {
      kmGT9.push(ob);
    }
  });

  if (km03.length !== 0) {
    km36.unshift(km03[km03.length - 1]);
  }
  if (km36.length !== 0) {
    km69.unshift(km36[km36.length - 1]);
  }
  if (km69.length !== 0) {
    kmGT9.unshift(km69[km69.length - 1]);
  }
  
  return {
    'hodo_km03': km03,
    'hodo_km36': km36,
    'hodo_km69': km69,
    'hodo_kmGT9': kmGT9
  }
}

function extractHodoPath(data) {
  let coordData = data
    .map(ob => {
      let u = ob.speed;
      let theta = ob.direction;
      return toHodographCoord(u, theta);
    });
  return getPathStr(coordData);
}

const styles ={
  'hodo_km03': {stroke: 'red'},
  'hodo_km36': {stroke: '#00FF00'},
  'hodo_km69': {stroke: 'orange'},
  'hodo_kmGT9': {stroke: '#00FFFF'}
}

export default class HodographWindTrace extends React.Component {
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
      <g 
        id="hodographTrace"
        transform={`translate(${hodographArea.width / 2} ${hodographArea.height / 2})`}
      >
        {
          Object.entries(partitionTrace(data.data))
            .map((partition) => {
              let [
                partitionKey,
                partitionData
              ] = partition;
              return (
                <path
                  id={partitionKey}
                  d={extractHodoPath(partitionData)}
                  style={styles[partitionKey]}
                  strokeWidth="4"
                  fill="none"
                />
              )
            }) 
          }
      </g>
    )
  }
}