import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { setPlaceAction, getSocMediaDataAction } from '../actions/cityDataAction'
import '../styles/HomeView.scss'
import { HomeCard } from '../components/HomeCard'


export class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: '',
			lng: '',
			lat: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePlaceSelected = this.handlePlaceSelected.bind(this);
	}

	handleSubmit(){
		browserHistory.push('/Results');
		this.props.setPlace(this.state)
		this.props.getSocMediaData(this.state)
	}

	handlePlaceSelected(event) {
		this.setState({
			cityName: event.formatted_address,
			lng: event.geometry.location.lng(),
			lat: event.geometry.location.lat()
		});
	}

	render(){
		var verticallyCenter = {
			position: 'absolute',
			top: '40%',
			width: '100%'
		}
		return (
			<div className="homeView-Main">
				<div style={verticallyCenter}>
					<Col xs={12}  sm={8} smOffset={2} md={6} mdOffset={3}>
						<HomeCard onSubmit={this.handleSubmit} onPlaceSelected={this.handlePlaceSelected}/>
					</Col>
				</div>
				<footer>
					<p className="credit"> Photo by Mona Eendra on Unsplash </p>
				</footer>
			</div>
		)
	}
}

HomeView.propTypes = {
	setPlace : React.PropTypes.func,
	getSocMediaData: React.PropTypes.func
};

export default connect(
	function mapStateToProps() {
		return {};
	},
	function mapDispatchToProps(dispatch) {
		return {
			setPlace: Place => dispatch(setPlaceAction(Place)),
			getSocMediaData: Place => dispatch(getSocMediaDataAction(Place))
		};
	}
)(HomeView);
