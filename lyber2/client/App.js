import React, { Component } from 'react';
import logo from './logo.svg';	import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from './containers/ConfirmRouteContainer';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';
import { getMapboxKey } from './actions/fetchLocations';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;