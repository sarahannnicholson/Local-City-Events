import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GoogleMap } from "../components/GoogleMap"

import '../styles/CityEvents.scss'

export class CityEvents extends Component {
    constructor(props) {
        super(props);
    }

    render(){
      const { cityCoordinates } = this.props;
      const { error } = cityCoordinates;

        return (
            <div>
                <h3> Second Page </h3>
                { !!cityCoordinates.coordinate &&
                <div>
                  <p> {cityCoordinates.coordinate.lng} </p>
                  <p> {cityCoordinates.coordinate.lat} </p>
                  <GoogleMap lat={cityCoordinates.coordinate.lat} lng={cityCoordinates.coordinate.lng} />
                </div>
                }
                { error!== null &&
                <p> {error} </p>
                }
            </div>
        )
    }
}

CityEvents.propTypes = {
  cityCoordinates: React.PropTypes.object
};

export default connect(
  function mapStateToProps(state) {
    return { cityCoordinates: state.mapReducer.toJS() };
  }
)(CityEvents);
