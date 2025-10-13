import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true }
});

export default mongoose.model('Service', ServiceSchema);