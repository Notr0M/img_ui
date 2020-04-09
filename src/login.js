import React,{ useState } from 'react';

import {
  Link
} from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const loginUser = (e) => {
		e.preventDefault();
		const data = {
			email: e.target[0].value,
			password: e.target[1].value,
		}
		fetch("http://localhost:8080/api/login", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(async res => {
			const result = await res.json();
			console.log(result);
			if(result.token) {
				localStorage.setItem('token', result.token);
			}
		}).catch(err => console.log("errr"));
	}
	
	return (
		<div className="toggle-page">
			<h3> Login  </h3>
			<form onSubmit={loginUser}>
				<input
					placeholder="Username"
					className="user"
					type="text" 
					name="username" 
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/> <br />
				<input placeholder="Password" type="password" name="password" /> <br />
				<input type="submit" value="Login" /> 
			</form>
			<p>no Account? <Link to="/create"> create</Link></p>
		</div>
	);
}

export default Login;