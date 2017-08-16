import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { getCityCoordinatesAction } from '../actions/cityDataAction';
import '../styles/HomeView.scss';
import { HomeCard } from '../components/HomeCard';


export class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePlaceSelected = this.handlePlaceSelected.bind(this);
	}

	handleSubmit(){
		browserHistory.push('/Results');
		this.props.getCityCoordinates(this.state.cityName)
	}

	handlePlaceSelected(event) {
		this.setState({cityName: event.formatted_address});
	}

	render(){
		var verticallyCenter = {
			position: 'absolute',
			top: '45%',
			width: '100%'
		}
		return (
			<div className="homeView-Main">
				<div style={verticallyCenter}>
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
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
