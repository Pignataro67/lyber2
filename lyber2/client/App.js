import React, { Component } from 'react';
import logo from './logo.svg';	import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from '../containers/confirmRouteContainer';
import ResultsContainer from './containers/resultsContainer';
import SearchContainer from './containers/searchContainer';
import { getMapboxKey } from './actions/fetchLocations';
import './App.css';
import PageTitle from './components/PageTitle';
import Background from './images/Background.jpg'
import { getMapboxKey } from './actions/mapboxActions'

class App extends Component {
  render() {
  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50vw',
      height: '75vh',
      backgroundImage: `url(${Background})`
    }} className="App">
        <Router>
          <div>
            <Route exact path="/" component ={SearchContainer}/>
            <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
            <Route exact path="/results" component={ResultsContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {startingLocation: state.StartingLocation,
  destination: state.destination}
}

const mapDispatchToProps = (dispatch) => {
  return {getMapboxKey: () => dispatch(getMapboxKey())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);