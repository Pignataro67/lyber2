import React, { Component } from 'react';
import Result from './Result';
import Card from '../Card';

class Results extends Commponent {
  render() {
    return (
      <div>
        <Card label={this.props.label}>
          <Result header={"Uber"} estimates={this.props.uberEstimates} buttonTitle={"Take me to Uber"}/>
          <Result header={"Lyft"} estimates={this.props.lyftEstimates} buttonTitle={"Take me to Lyft"}/>
        </Card>
      </div>
    )
  }
}

export default Results;