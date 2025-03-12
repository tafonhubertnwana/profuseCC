import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Add your MongoDB Atlas connection string to .env
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      // Connect to MongoDB
      await client.connect();
      const db = client.db('consultationDB'); // Replace with your database name
      const collection = db.collection('submissions'); // Replace with your collection name

      // Insert the form data into the collection
      const result = await collection.insertOne(formData);
      console.log('Data inserted:', result.insertedId);

      res.status(200).json({ message: 'Form submitted successfully!', id: result.insertedId });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      // Close the connection
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}