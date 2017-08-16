import React, { Component } from 'react'
import { connect } from 'react-redux';
import { GoogleMap } from "../components/GoogleMap"
import AppBar from 'material-ui/AppBar/AppBar'

import '../styles/CityEvents.scss'

export class ResultsView extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		const { cityCoordinates } = this.props;
		const { error } = cityCoordinates;

		return (
			<div>
				<AppBar></AppBar>
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
			</div>
		)
	}
}

ResultsView.propTypes = {
	cityCoordinates: React.PropTypes.object
};

export default connect(
	function mapStateToProps(state) {
		return { cityCoordinates: state.mapReducer.toJS() };
	}
)(ResultsView);
