// functions/reverseText.js
export async function handler(event, context) {
	try {
		// Ensure the request method is POST
		if (event.httpMethod !== 'POST') {
			return {
				statusCode: 405,
				body: JSON.stringify({ message: 'Method Not Allowed' }),
			};
		}

		// Parse the request body as JSON
		const requestBody = JSON.parse(event.body);

		// Check if the 'text' property exists in the request body
		if (!requestBody.value) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: 'Text is missing in the request body' }),
			};
		}

		// Reverse the input text
		const reversedText = requestBody.value.split('').reverse().join('');

		// Return the reversed text as a response
		return {
			statusCode: 200,
			body: JSON.stringify({ reversedText }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
}
