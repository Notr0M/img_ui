const auth = {
	token: localStorage.getItem('token'),
	getToken: (cb) => {		
		return new Promise((resolve, reject) => {
			setTimeout(resolve({token: auth.token, loading: false}), 2000);
			reject({error: "not found"});
		});
	}
}
export default auth;