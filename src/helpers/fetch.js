const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === 'get') {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
	}
};

const fetchConToken = (endpoint, data, method = 'GET') => {};

export { fetchSinToken, fetchConToken };
