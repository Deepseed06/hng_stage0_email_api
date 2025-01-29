import express from 'express';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
    origin: "*", // This allows all origins
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }

  app.use(cors(corsOptions))
  app.use(express.json())

// API route
app.get('/', (req, res ) => {
    res.send('Welcome to my API')
})
app.get('/api/info', (req, res) => {
    const email = process.env.EMAIL || 'Email not set';
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const isValid = isValidEmail(email)
    const githubUrl = process.env.GITHUB_URL || 'github url  not set';
    const currentDatetime = new Date().toISOString();
  if(!isValid) {
    res.status(404).json({
        message: "Invalid Email",
      });
    return
  };
  res.json({
    email: email,
    current_datetime: currentDatetime,
    github_url: githubUrl
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Access the API at http://localhost:${port}/api/info`);
});

// Test the API

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