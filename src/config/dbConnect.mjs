import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohammed94175_db_user:Abdullah78694175!@portfolio.nskxdsg.mongodb.net/');
    console.log(' MongoDB connected');
  } catch (err) {
    console.error('  MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;