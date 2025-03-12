import { connectToDatabase } from "../../lib/mongodb";
import Testimonial from "../../models/Testimonial";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const { name, image, review, rating } = req.body;

      const newTestimonial = new Testimonial({ name, image, review, rating });
      await newTestimonial.save();

      res.status(201).json({ success: true, message: "Testimonial added", testimonial: newTestimonial });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "GET") {
    try {
      const testimonials = await Testimonial.find();
      res.status(200).json({ success: true, testimonials });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching testimonials" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
