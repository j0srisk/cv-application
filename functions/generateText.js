const axios = require('axios');

exports.handler = async function (event, context) {
	try {
		const requestBody = JSON.parse(event.body);
		const topic = requestBody.topic;

		return {
			statusCode: 200,
			body: JSON.stringify({ topic: topic }),
		};

		// Your API endpoint URL
		const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';

		// Data for the API request
		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: `Tell me a joke about ${topic}`,
				},
			],
			temperature: 1,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		};

		// Making the API request using axios
		const response = await axios.post(apiUrl, requestData, {
			headers: {
				Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
				'Content-Type': 'application/json',
			},
		});

		// Return the API response
		return {
			statusCode: 200,
			body: JSON.stringify(response.data),
		};
	} catch (error) {
		// Return an error if something goes wrong
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message }),
		};
	}
};
