import React, { Component } from 'react';
import Result from './Result';
import Button from '../Button';
import Card from '../Card';
import { Redirect, Link } from 'react-router-dom';

class Results extends Commponent {

  componentDidMount() {    
      if(this.props.resultsReducer.isFetchingUberEstimate) {


    }
  }

  render() {
    return (
      <div>
        <Card label={this.props.label}>
          <Result header={"Uber"} uberEstimates={this.props.uberEstimates}/>
          <Result header={"Lyft"} lyftEstimates={this.props.lyftEstimates}/>
        </Card>
      </div>
    )
  }
}

export default Results;