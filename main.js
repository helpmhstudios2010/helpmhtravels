async function generateAccessToken() {
  // Define endpoint URL here
  const endpointUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  // Define header parameters here
  const headerParameters = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  // Define body parameters here
  const bodyParameters = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'M2L9r0E6lppeWPfLvqNa7A21mfmuxz6B',
    client_secret: 'JihlholjZCIu8v1Q',
  });

  // Setting API call options
  const options = {
    method: 'POST',
    headers: headerParameters,
    body: bodyParameters,
  };

  try {
    const response = await fetch(endpointUrl, options);

    // Logging the entire response for debugging
    console.log('Full Response:', response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Access token should be in the 'access_token' property of the response
    const accessToken = data.access_token;

    // Log the access token to the console
    console.log('Access Token:', accessToken);

    // Perform further actions with the access token if needed
    // For example, you might want to use it in another API request
    // or store it for later use
  } catch (error) {
    console.error('Error:', error.message);
  }
  printResponse()
}

function printResponse(response) {
  // Implement your logic for handling the response here
  console.log(response);
}

function printError(error) {
  // Implement your logic for handling errors here
  console.error(error);
}

function printResponse(response) {
  // Check if the response object exists
  if (response) {
    // Check if the response status is OK (status code 200)
    if (response.ok) {
      // Parse the JSON response
      return response.json()
        .then(data => {
          // Access token should be in the 'access_token' property of the response
          const accessToken = data.access_token;

          // Log the access token to the console
          console.log('Access Token:', accessToken);

          // Perform further actions with the access token if needed
          // For example, you might want to use it in another API request
          // or store it for later use
        })
        .catch(error => printError(error));
    } else {
      // Handle non-OK responses
      console.error('Non-OK response:', response.status, response.statusText);
    }
  } else {
    // Handle the case where the response is undefined
    console.error('Response is undefined');
  }
}

function search() {
  generateAccessToken();
}
