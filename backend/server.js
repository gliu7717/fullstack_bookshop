import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

const port = process.env.PORT || 5000;

connectDB();
const app = express();


app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
  );