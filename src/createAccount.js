import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccount(props) {
	const [result, setResult] = useState({
		loading: false,
		message: ""
	});
	const postPerson = (e) => {
		e.preventDefault();
		setResult({
			loading: true,
			message: ""
		});
		const data = {
			first: e.target[0].value,
			last: e.target[1].value,
			password: e.target[2].value,
			email: e.target[3].value,
			country: e.target[4].value,
		}
		fetch("http://localhost:8080/api/create", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(async res => {
			let result = await res.json(); 
			console.log(result);
			setResult({
				loading: false,
				message: result.message
			});
		}).catch(err => console.log(err));
	}
	console.log(`msg: ${result.message}`);
	return (
		<>
		<h3>Create an Account</h3>
		<form className="toggle-page" onSubmit={postPerson}>
			<input type="text" name="first" placeholder="Firstname" />
			<br />
			<input type="text" name="last" placeholder="Lastname" />
			<br />
			<input type="password" name="password" placeholder="Password" />
			<br />
			<input type="email" name="email" placeholder="Email" />
			<br />
			<input type="text" name="country" placeholder="Country" />
			<br />
			<input type="submit" value="Submit" />
			<span>{result.loading ? <p>loading ...</p> : <i />}</span>
			<span>{result.message ? <p>{result.message}</p> : <i />}</span>
		</form>
		<p>Already have an account? <Link to="/login"> login</Link></p>
		</>
	);
}

export default CreateAccount;