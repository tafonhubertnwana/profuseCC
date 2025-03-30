import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(v) {
        // Validate phone number to have at least 9 digits
        return /^\d{9,}$/.test(v);  // Regex matches 9 or more digits
      },
      message: props => `${props.value} is not a valid phone number! It should have at least 9 digits.`
    }
  },
  address: { type: String, default: '' },
  message: { type: String, default: '' },
});

const Contact =  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
