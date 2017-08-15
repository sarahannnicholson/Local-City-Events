import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';

import { getCityCoordinatesAction } from '../actions/cityDataAction';
import '../styles/HomeView.scss'
import Header from '../components/Header/Header'


export class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: ''
		};

		this.onPlaceSelected = this.onPlaceSelected.bind(this);
		this.makeRequest = this.makeRequest.bind(this);
	}

	makeRequest(){
		browserHistory.push('/Results');
		this.props.getCityCoordinates(this.state.cityName)
	}

	onPlaceSelected(event) {
			this.setState({cityName: event.formatted_address});
	}

	render(){
		return (
			<div>
				<div className='container text-center'>
					<Header />
					<Autocomplete
						style={{width: '90%'}}
						onPlaceSelected={(place) => {
							console.log(place);
						}}
						types={['(regions)']}
						placeholder="Enter a city name"
						onPlaceSelected={this.onPlaceSelected}
					/>
					<button onClick={this.makeRequest}> Submit </button>
				</div>
			</div>
		)
	}
}

HomeView.propTypes = {
	getCityCoordinates : React.PropTypes.func
};

export default connect(
	function mapStateToProps() {
		return {};
	},
	function mapDispatchToProps(dispatch) {
		return {
			getCityCoordinates: cityName => dispatch(getCityCoordinatesAction(cityName))
		};
	}
)(HomeView);
