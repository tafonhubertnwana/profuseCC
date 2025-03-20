import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  interest: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Consultation = mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);

export default Consultation;