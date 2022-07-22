import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import AnimePage from './pages/AnimePage';
import SearchPage from './pages/SearchPage';


import 'antd/dist/antd.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact
							path="/"
							render={() => (
								<HomePage />
							)}/>
		<Route exact
							path="/login"
							render={() => (
								<LoginPage />
							)}/>
		<Route exact
							path="/user"
							render={() => (
								<UserPage />
							)}/>
		<Route exact
							path="/anime"
							render={() => (
								<AnimePage />
							)}/>
		<Route exact
							path="/search"
							render={() => (
								<SearchPage />
							)}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

