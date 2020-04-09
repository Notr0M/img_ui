import React,{ useState } from 'react';

import WrapperPage from './wrapperPage';

function Toggle() {
	const [pageToggle, setPageToggle] = useState("");
	return (
		<div className="toggle">
			<button className="login">Login</button>
			<button className="create">Create an Account</button>
			<hr />
			<WrapperPage show={pageToggle} />
		</div>
	);
}

export default Toggle;