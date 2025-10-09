import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose.connect('mongodb+srv://admin_db_user:awbVJ79DI7i64Scu@cluster003.oviumia.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster003');

  const mongodb = mongoose.connection;

  mongodb.on('error', console.error.bind(console, 'Connection Error: '));
  mongodb.once('open', () => {
    console.log('====> Connected to MongoDb.');
  });

  return mongodb;
}