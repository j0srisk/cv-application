// functions/reverseText.js
exports.handler = async function (event, context) {
	try {
		console.log(event);
		console.log(context);
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
		if (!requestBody.text) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: 'Text is missing in the request body' }),
			};
		}

		// Reverse the input text
		const reversedText = requestBody.text.split('').reverse().join('');

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
};
