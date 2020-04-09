import React from 'react';
import { Link } from 'react-router-dom';
function WrapperPage({ children }) {
	console.log(children);
	return(
		<>
			<div className="toggle btn-group">
				<Link to="/login"><button className="login">Login</button></Link><br />
				<Link to="/create"><button className="create">Sign-up</button></Link><br />
			</div>
			{children}
		</>
	);
}

export default WrapperPage;