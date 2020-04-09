import React from 'react';

import { Link } from 'react-router-dom';
import not from './not.jpg';

export default function NotFound() {
	return (
		<div>
			<h4>The page you are looking at has been not found</h4>
			<img src={not} alt="not found" className="notFound"/>
			<Link to="/">Back to home</Link>
		</div>
	);
}