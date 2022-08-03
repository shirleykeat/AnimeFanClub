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
import TypesPage from './pages/TypesPage';
import SourcePage from './pages/SourcePage';
import RatingsPage from './pages/RatingsPage';

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
					path="/search/advance_search"
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
				<Route exact
					path="/source"
					render={() => (
						<SourcePage />
					)} />
				<Route exact
					path="/rating"
					render={() => (
						<RatingsPage />
					)} />
			</Switch>
		</Router>
	</div>,
	document.getElementById('root')
);

