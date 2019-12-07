import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Router';

// User is LoggedIn
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./views/user/Dashboard/Dashboard"; 

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));