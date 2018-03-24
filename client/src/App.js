import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Jumbotron from './components/Jumbotron'
import Home from "./components/Home";
import Search from './components/Search';
import NYT from 'newyorktimes'

class App extends Component {
  state = {

  };

  componentWillMount() {

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }





  render() {

    return (
      <Router>
        <div>

          <Route exact path="/" render={() => {
            return <Home />
          }
          } />
          {/* <Route exact path="/j" render={() => {
            return <Jumbotron />
          }} /> */}
          <Route exact path="/s" render={() => {
            return <Search />
          }} />
        </div>
      </Router>


    );
  }
}

export default App;