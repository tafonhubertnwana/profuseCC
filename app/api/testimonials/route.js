import { connectToDatabase } from "../../../lib/mongodb";
import Testimonial from "../../../models/Testimonial";
import multer from "multer";
import { NextResponse } from "next/server";

const upload = multer({ storage: multer.memoryStorage() });

export async function GET() {
  await connectToDatabase();
  const testimonials = await Testimonial.find();

  const testimonialsWithImages = testimonials.map((testimonial) => ({
    ...testimonial._doc,
    image: `data:${testimonial.contentType};base64,${testimonial.image.toString("base64")}`
  }));

  return NextResponse.json(testimonialsWithImages, { status: 200 });
}


export async function POST(req) {
  await connectToDatabase();
  const formData = await req.formData();
  const name = formData.get("name");
  const review = formData.get("review");
  const rating = formData.get("rating");
  const image = formData.get("image");
  
  if (!image) {
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const contentType = image.type;
  
  const newTestimonial = new Testimonial({ name, review, rating, image: buffer, contentType });
  await newTestimonial.save();

  return NextResponse.json(newTestimonial, { status: 201 });
}