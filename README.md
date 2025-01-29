
<h1> DESCRIPTION </h1>

This API endpoint is implemented using Node.js and the Express framework. This API provides a simple endpoint to retrieve information about the developer, including their email, GitHub URL, and a timestamp.
it returns a JSON object containing the developer's email, GitHub URL, and a timestamp in ISO format.

<h1> HOW TO RUN THIS PROJECT LOCALLY </h1>

Step 1: Clone the Repository

1. Create a new folder: Create a new folder on your local machine where you want to clone the repository.
2. Open the terminal: Open the terminal in the newly created folder.
3. Clone the repository: Run the command git clone https://github.com/Deepseed06/hng_stage0_email_api.git 

Step 2: Install Dependencies

1. Navigate to the project folder: Run the command cd your-repo-name to navigate to the project folder.
2. Install dependencies: Run the command npm install to install all dependencies listed in the package.json file.

Step 3: Start the Application

1. Start the application: Run the command npm run dev to start the application.
2. Server started: You should see a message indicating that the server has started, along with the port number (e.g., Server started on port 3000).

<h1> API DOCUMENTATION </h1>

API Endpoints

GET /api/info

Request

- Method: GET
- Path: /
- Headers: None
- Query Parameters: None
- Body: None

Response

- Status Code: 200 OK
- Content-Type: application/json
- Response Body:

{
  "email": "string",
  "githubUrl": "string",
  "timestamp": "string (ISO format)"
}


Example Response


{
  "email": "john.doe@example.com",
  "githubUrl": "https://github.com/johndoe",
  "timestamp": "2022-07-22T14:30:00.000Z"
}



/**
 * Returns a JSON object containing the developer's email, GitHub URL, and a timestamp in ISO format.
 *
 * @route GET /
 * @returns {Object} JSON object containing email, githubUrl, and timestamp
 */
app.get('/api/info', (req, res) => {
  const email = 'john.doe@example.com';
  const githubUrl = 'https://github.com/johndoe';
  const timestamp = new Date().toISOString();

  res.json({ email, githubUrl, timestamp });
});

https://hng.tech/hire/nodejs-developers
