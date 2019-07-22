import axios from 'axios';

export const api = {
	ajax: function(config) {
		config.url = apiBaseUrl + config.url;
		return axios(config);
	},

	get: function(url) {
		return axios
			.get(apiBaseUrl + url);
	},

	put: function(url, request) {
		return axios
			.put(apiBaseUrl + url, request);
				
	},

	post: function(url, request) {
		return axios
			.post(apiBaseUrl + url, request);
	},

	patch: function(url, changes) {
		var request = [];

		for (var i = 0; i < changes.length; i++) {
			request.push({
				op: 'replace',
				path: '/' + changes[i].name,
				value: changes[i].value
			});
		}

		return axios({
			method: 'patch',
			url: apiBaseUrl + url,
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
			data: JSON.stringify(request)
		});
    },
	
	delete: function(url, request) {  
        if (request) {
            return axios({
                method: 'delete',
                url: apiBaseUrl + url,
                data: request
            });
        }
        else {
		    return axios
                .delete(apiBaseUrl + url);
        }
	}
};