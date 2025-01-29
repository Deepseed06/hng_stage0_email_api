import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
    origin: "*", // This allows all origins
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }


// API route
app.get('/api/info', (req, res) => {
  const email = process.env.EMAIL || 'Email not set';
  const currentDatetime = new Date().toISOString();

  res.json({
    email: email,
    datetime: currentDatetime
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Access the API at http://localhost:${port}/api/info`);
});

// Test the API
// import fetch from 'node-fetch';

const testAPI = async () => {
  try {
    const response = await fetch(`http://localhost:${port}/api/info`);
    const data = await response.json();
    console.log('API Response:', data);
  } catch (error) {
    console.error('Error testing API:', error);
  }
};

// Wait for the server to start before testing
setTimeout(testAPI, 1000);