import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Autocomplete from 'react-google-autocomplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import { Row, Col } from 'react-bootstrap';
import FontIcon from 'material-ui/FontIcon';
import MapsPinDrop from 'material-ui/svg-icons/maps/pin-drop';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

export class HomeCard extends Component{

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Card>
				<CardHeader title="Find Local Events" titleStyle={{fontSize: 30}} avatar={<Avatar icon={<MapsPinDrop />} size={40} />} />
				<CardActions>
					<Row>
						<Col xs={8}>
							<div className="text-center">
								<TextField>
									<Autocomplete
										types={['(regions)']}
										onPlaceSelected={this.props.onPlaceSelected}
									/>
								</TextField>
							</div>
						</Col>
						<Col xs={4}>
							<RaisedButton
								label="Submit"
								labelPosition="before"
								primary={true}
								icon={<NavigationChevronRight />}
								onClick={this.props.onSubmit}
							/>
						</Col>
					</Row>
				</CardActions>
			</Card>
		)
	}
}
