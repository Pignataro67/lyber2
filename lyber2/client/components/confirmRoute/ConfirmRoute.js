import React, { Component } from 'react';
import Button from '../Button';
import RouteMap from './RouteMap';
import Card from '../Card';

 class ConfirmRoute extends Component{
  state = {
    redirectToResults: false,
    redirectToSearch: false
  }

    render(){
  const { redirectToResults } = this.state;
  const { redirectToSearch } = this.state;
    if(redirectToResults) {
      return <Redirect to="/results"/>
  } else if (redirectToSearch) {
    return <Redirect to='/'/>
  }
  return(
    <div>
      <Card>
        <RouteMap mapboxKey={this.props.mapboxKey} startLat={this.props.startLat} startLng={this.props.startLng} destinationLat={this.props.destinationLat} destinationLng={this.props.destinationLng}/>
      </Card>
    </div>
    )
  }
}

 export default ConfirmRoute;