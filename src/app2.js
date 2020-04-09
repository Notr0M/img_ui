import React from 'react';

export default function App2({ check }) {
	const handleClick = () => {
		check("pooria", () => {
			console.log("test");
		})
	}
	return (
		<div>
			<button onClick={handleClick}>click</button>
			<p>App2</p>
		</div>
	);
}