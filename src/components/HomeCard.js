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
					<Row style={{marginRight: 0, marginLeft: 0}}>
						<Col sm={8} xs={12}>
							<div className="text-center">
								<TextField id="cityName" fullWidth={true}>
									<Autocomplete
										types={['(regions)']}
										onPlaceSelected={this.props.onPlaceSelected}
									/>
								</TextField>
							</div>
						</Col>
						<Col sm={4} xs={12}>
							<RaisedButton
								label="Submit"
								labelPosition="before"
								primary={true}
								fullWidth={true}
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
