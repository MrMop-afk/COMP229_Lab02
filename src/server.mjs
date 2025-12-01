import dotenv from 'dotenv';
dotenv.config();
console.log('Environment Variables:', {
  JWT_SECRET: process.env.JWT_SECRET,
  ATLASDB: process.env.ATLASDB
});
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';
import mongoose from 'mongoose';
import  connectDB  from './config/dbConnect.mjs';
import indexRouter from './View/index.mjs';
import contactsRouter from './View/contacts.mjs';
import usersRouter from './View/users.mjs';
import projectsRouter from './View/projects.mjs';
import servicesRouter from './View/services.mjs';   
import authRoutes from './View/auth.mjs';


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const db = connectDB();

app.use('/', indexRouter);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);

// 404 handler
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});