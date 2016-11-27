import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { getCityCoordinatesAction } from '../actions/cityDataAction';
import '../styles/HomeView.scss'
import Header from '../components/Header/Header'


export class HomeView extends Component {
    constructor(props) {
        super(props);
      this.state = {
          cityName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest(){
      browserHistory.push('/Results');
      this.props.getCityCoordinates(this.state.cityName)
    }

    handleChange(event) {
        this.setState({cityName: event.target.value});
    }

    render(){
        return (
            <div>
              <div className='container text-center'>
                <Header />
                <input value={this.state.cityName} type="text" placeholder="Enter a city name" onChange={this.handleChange} />
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

