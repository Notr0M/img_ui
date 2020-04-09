import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
	Link
} from "react-router-dom";

import QuoteApi from './quoteApi';
import Login from './login'
import CreateAccount from './createAccount'
import Home from './home'
import Profile from './profile';
import NotFound from './notFound';
import User from './user';
import Data from './data';
import WrapperPage from './wrapperPage';

import logo from './logo.svg';
import './App.css';

function checkAuth() {
	console.log("ASYNC");
	return new Promise((resolve, reject) => {
		if(localStorage.getItem('token')){
			fetch("http://localhost:8080/check", {
				method: "POST",
				headers: {
					accept: "application/json",
					token: localStorage.getItem('token')
				}
			}).then(async res => {
				const response = await res.json();
				if(response.success) {
					resolve({isAuth: true, loading: false})
				} else {
					reject({isAuth:false, error: "token is not valid", loading: false});
				}
			}).catch(err => console.log("errrr"));
		} else {
			reject({
				isAuth: false,
				error: "provide api token",
				loading: false
			});
		}
	});
}

function App() {
	const [loading, setLoading] = useState(true);
	const [isAuth,setIsAuth] = useState(false);
	React.useEffect(() => {
		checkAuth().then(async res => {
			setIsAuth(true);
			setLoading(false);
		})
			.catch(err => {
				console.log("err");
				setLoading(false);
			});
	}, []); 
  return (
    <div className="App">
			<Profile />
			<Router>
				<Link to="/"><button>Home</button> </Link>
				<Link to="/data"><button>fetch data</button> </Link>
				<Link to="/user/:username"><button>my profile</button> </Link>
				<Switch>
				<Route exact path="/"  >
					<Home loading={loading} isAuth={isAuth}/>
				</Route>
				<Route path="/user/:username">
					<User />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/create">
					<CreateAccount />
				</Route>
				<Route path="/data" > 
					<Data />
				</Route>
				<Route path="*">
          <NotFound />
        </Route>
				</Switch>
			</Router>
      <header className="App-header">
				<QuoteApi />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;