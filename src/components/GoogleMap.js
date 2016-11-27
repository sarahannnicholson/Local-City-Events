import React from 'react'

export class GoogleMap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mapOptions: {
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        zoom: 10,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    };
  }

  componentDidMount() {
    var map = new google.maps.Map(this.refs['google-map'], this.state.mapOptions);
    var marker = new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      map: map
    });
  }

  render() {
    return (
      <div ref="google-map" id='map'></div>
    );
  }
}

GoogleMap.propTypes = {
  lng : React.PropTypes.number,
  lat: React.PropTypes.number
};

