const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const register = require('./routes/employeeRouter');
const studentLogin = require('./routes/studentRoute');
const aluminiLogin = require('./routes/aluminiRouter');
const papers = require('./routes/previouspapersroutes/previouspapersroute');
const alumini = require('./routes/aluminiroutes/aluminiRoutes');
const jobs = require('./routes/adminRouters/adminRouters');
const adminLogin = require('./routes/adminLoginRouter');

const app = express();

// Body parser is already part of express
app.use(express.json());

// CORS configuration for the frontend
const allowedOrigins = [
  'http://localhost:5173', 
  'https://placement-portal-backend-e74c.onrender.com', 
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);


// MongoDB connection
connectDB();

// API routes
app.use('/api', register);
app.use('/api', studentLogin);
app.use('/api', aluminiLogin);
app.use('/api', papers);
app.use('/api', alumini);
app.use('/api', jobs);
app.use('/api', adminLogin);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
