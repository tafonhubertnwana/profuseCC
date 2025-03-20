import clientPromise  from '../../../lib/mongodb';
import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Save files to the 'public/uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Disable the default Next.js body parser to use multer
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Use multer to handle file upload
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
      }

      // Extract form data
      const { name, review, rating } = req.body;
      const imagePath = `/uploads/${req.file.filename}`; // Path to the uploaded image

      try {
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('testimonials_db'); // Replace with your database name

        // Insert the new testimonial into the database
        const result = await db.collection('testimonials').insertOne({
          name,
          image: imagePath,
          review,
          rating: parseInt(rating), // Ensure rating is a number
        });

        // Return the newly created testimonial
        return NextResponse.json(result.ops[0], { status: 201 });
      } catch (error) {
        console.error('Error saving testimonial:', error);
        return NextResponse.json({ error: 'Failed to save testimonial' }, { status: 500 });
      }
    });
  } else {
    // Handle unsupported HTTP methods
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}