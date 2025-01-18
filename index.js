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
const company = require('./routes/adminRouters/companyRouters')

const app = express();

app.use(express.json());


const allowedOrigins = [
  'http://localhost:5173', 
  'https://placement-portal-zeta.vercel.app', 
  'https://placement-portal-backend-e74c.onrender.com', 
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Blocked by CORS: ${origin}`); 
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

connectDB();

app.use('/api', register);
app.use('/api', studentLogin);
app.use('/api', aluminiLogin);
app.use('/api', papers);
app.use('/api', alumini);
app.use('/api', jobs);
app.use('/api', adminLogin);
app.use('/api', company);

app.get('/', (req, res) => {
  res.status(200).send('Server is running...');
});

app.use((req, res, next) => {
  res.status(404).send({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
