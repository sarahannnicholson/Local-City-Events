import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import {List, ListItem} from 'material-ui/List'
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card'

export class FoursquareCard extends Component{

	constructor(props) {
		super(props);
	}

	render(){
		const { venues } = this.props
		return(
			<Card style={{padding: '4rem'}}>
				<CardHeader title="Foursquare Photos" avatar={<SocialIcon network="foursquare"/>} size={10} />} />
				<List>
				{venues.map(function(venue, i){
					return  <ListItem primaryText={venue.name}/>
				})}
				</List>
				<CardActions>
				</CardActions>
			</Card>
		)
	}
}
