import React, { Component } from 'react'
import '../../styles/HomeView.scss'
import * as cityMap from '../../actions/cityMap'


export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest(){
        //let action = cityMap.getMap(this.state.value)
    //    dispatch(action)
        cityMap.getMap(this.state.value)
       // cardActions.dustCard(card, (card) => cardActions.dustCard(card))
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){

        return (
            <div>
                <input value={this.state.value} type="text" placeholder="Enter a city name" onChange={this.handleChange} />
                <button onClick={this.makeRequest}> Submit </button>
            </div>
        )
    }

}