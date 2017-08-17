import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar/AppBar'
import IconButton from 'material-ui/IconButton'
import { GoogleMap } from "../components/GoogleMap"
import Autocomplete from 'react-google-autocomplete'
import { setPlaceAction } from '../actions/cityDataAction'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import '../styles/CityEvents.scss'

export class ResultsView extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { place } = this.props;
		const { error } = place;

		return (
			<div>
				<AppBar
					title={place.details.cityName}
					iconElementLeft={<IconButton><NavigationArrowBack/></IconButton>}
					onLeftIconButtonTouchTap={browserHistory.goBack}>
				</AppBar>
				<div>
					{ !!place.details &&
					<div>
						<GoogleMap lat={place.details.lat} lng={place.details.lng} />
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
	place: React.PropTypes.object,
	setPlace : React.PropTypes.func
};

export default connect(
	function mapStateToProps(state) {
		return { place: state.mapReducer.toJS() };
	},
	function mapDispatchToProps(dispatch) {
		return {
			setPlace: Place => dispatch(setPlaceAction(Place))
		};
	}
)(ResultsView);
