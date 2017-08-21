import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar/AppBar'
import IconButton from 'material-ui/IconButton'
import { GoogleMap } from "../components/GoogleMap"
import Autocomplete from 'react-google-autocomplete'
import { setPlaceAction } from '../actions/cityDataAction'
import { FoursquareCard } from '../components/FoursquareCard'
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import '../styles/CityEvents.scss'

export class ResultsView extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		const { place } = this.props;
		const { venues } = this.props.foursquare;
		const { error } = place;

		return (
			<div>
				<AppBar
					title={place.details.cityName}
					iconElementLeft={<IconButton><NavigationArrowBack/></IconButton>}
					onLeftIconButtonTouchTap={browserHistory.goBack}>
				</AppBar>
				<Row>
					<Col xs={12}>
						{ !!place.details &&
						<div>
							<GoogleMap lat={place.details.lat} lng={place.details.lng} />
						</div>
						}
						{ error !== null &&
						<p> {error} </p>
						}
					</Col>
				</Row>
				{ venues !== null &&
					<Col xs={12} sm={6} md={3}>
						<FoursquareCard venues={venues}/>
					</Col>
				}
			</div>
		)
	}
}

ResultsView.propTypes = {
	place: React.PropTypes.object,
	setPlace : React.PropTypes.func,
	foursquare: React.PropTypes.object
};

export default connect(
	function mapStateToProps(state) {
		return { place: state.mapReducer.toJS(), foursquare: state.foursquareReducer.toJS() };
	},
	function mapDispatchToProps(dispatch) {
		return {
			setPlace: Place => dispatch(setPlaceAction(Place))
		};
	}
)(ResultsView);
