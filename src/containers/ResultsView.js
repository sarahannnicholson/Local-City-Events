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
import MyGoogleSuggest from '../components/AutocompleteInput'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import '../styles/CityEvents.scss'

export class ResultsView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			lng: '',
			lat: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handlePlaceSelected = this.handlePlaceSelected.bind(this)
	}

	handleSubmit(){
		browserHistory.push('/Results')
		this.props.setPlace(this.state)
	}

	handlePlaceSelected(suggest, coordinate) {
		if (!!coordinate){
			this.setState({
				cityName: coordinate.title,
				lng: coordinate.longitude,
				lat: coordinate.latitude
			});
		}
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
