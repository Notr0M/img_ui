import React, { useState, useEffect } from 'react';

export default function QuoteApi() {
	const [quote, setQuote] = useState("");
	useEffect(() => {
		fetch('https://api.quotable.io/random')
			.then(response => response.json())
				.then(data => {
					setQuote(`${data.content} ~${data.author}`);
				});
	},[]);
	return (
		<p>{quote}</p>
	);
}