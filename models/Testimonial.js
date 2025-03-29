// models/Testimonial.js
import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: Buffer, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  contentType: { type: String, required: true },
});

export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);