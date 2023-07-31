const axios = require('axios');

export async function handler(event, context) {
	try {
		const requestBody = JSON.parse(event.body);
		const resumeData = requestBody.resumeData;
		const roleDescription = requestBody.roleDescription;
		const field = requestBody.field;
		const value = requestBody.value;

		// Your API endpoint URL
		const apiUrl = 'https://api.openai.com/v1/chat/completions';

		// Data for the API request
		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: 'Here is my resume: ' + resumeData,
				},
				{
					role: 'user',
					content: 'Here is the role I am applying to' + roleDescription,
				},
				{
					role: 'user',
					content:
						'Rewrite this' +
						field +
						' { ' +
						value +
						' } in no more than { ' +
						value.length +
						' } characters tailored towards this specific position. Include any relevant skills, experience, or certifications from my resume. Do not specifically mention the company or the role itself. Do not add hashtags or links.',
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
}
