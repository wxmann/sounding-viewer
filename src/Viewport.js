import React, { Component } from 'react';

export default class Viewport extends Component {
    render() {
        return (
            <div className="sounding-data">
                {this.props.soundingResult}
            </div>
        )
    }
};
