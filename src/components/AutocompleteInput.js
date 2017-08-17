import React, {Component} from "react"
import TextField from 'material-ui/TextField'
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"
import "react-google-places-suggest/lib/index.css"

const MY_API_KEY = "AIzaSyDLoyxJP7MmV5Bl9rTG-GwzwZeeFY1gj3w"

export class MyGoogleSuggest extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
			selectedCoordinate: null,
		};

		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSelectSuggest = this.handleSelectSuggest.bind(this);
	}

 	handleSearchChange(e){
		this.setState({search: e.target.value})
	}

	handleSelectSuggest(suggest, coordinate){
		this.setState({search: suggest.description, selectedCoordinate: coordinate})
		this.props.onSelectSuggest(suggest, coordinate)
	}

	render() {
		const {search} = this.state
		const {googleMaps} = this.props

		return (
			<GooglePlacesSuggest googleMaps={googleMaps} onSelectSuggest={this.handleSelectSuggest} search={search}>
				<TextField
					type="text"
					value={ search }
					floatingLabelText="Search a location"
					onChange={this.handleSearchChange}
					fullWidth={true}/>
			</GooglePlacesSuggest>
		)
	}
}

export default GoogleMapLoader(MyGoogleSuggest, {
	libraries: ["places"],
	key: MY_API_KEY,
})
