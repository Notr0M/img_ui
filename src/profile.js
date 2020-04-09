import React from 'react';
import avatar3 from './avatar3.png';

function Profile() {
	return (
		<div>
			Profile
			<div className="card">
				<header className="w3-container w3-light-grey">
					<h3>John Doe</h3>
				</header>
				<img src={avatar3} alt="avatar" />
			</div>
			<hr />
		</div>
	);
}

export default Profile;