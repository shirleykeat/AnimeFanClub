import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';
import AnimePage from './pages/AnimePage';
import SearchPage from './pages/SearchPage';


import 'antd/dist/antd.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import GenresPage from './pages/GenresPage';
import TypesPage from './pages/TypesPage'

ReactDOM.render(
	<div>
		<Router>
			<Switch>
				<Route exact
					path="/"
					render={() => (
						<HomePage />
					)} />
				<Route exact
					path="/signin"
					render={() => (
						<SigninPage />
					)} />
				<Route exact
					path="/signup"
					render={() => (
						<SignupPage />
					)} />
				<Route exact
					path="/user"
					render={() => (
						<UserPage />
					)} />
				<Route exact
					path="/anime"
					render={() => (
						<AnimePage />
					)} />
				<Route exact
					path="/search"
					render={() => (
						<SearchPage />
					)} />
				<Route exact
					path="/genres"
					render={() => (
						<GenresPage />
					)} />
				<Route exact
					path="/types"
					render={() => (
						<TypesPage />
					)} />
			</Switch>
		</Router>
	</div>,
	document.getElementById('root')
);

