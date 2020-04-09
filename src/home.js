import React from 'react';

import { Link } from 'react-router-dom';



export default function Home(prop) {
	console.log(prop)
	return (
		<>
		{prop.isAuth || prop.loading ? <p>loading</p> : (<div className="toggle btn-group">
				<Link to="/login"><button className="login">Login</button></Link><br />
				<Link to="/create"><button className="create">Sign-up</button></Link><br />
			</div>)}
		</>
	);
}