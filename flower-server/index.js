const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.sv1owis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
console.log("MongoDB URI:", uri);

// MongoDB client setup
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    const flowerCollection = client.db('flowerDB').collection('flower');

    // Get Flower
    app.get('/flower', async (req, res) => {
      const cursor = flowerCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Add flower (POST)
    app.post('/flower', async (req, res) => {
      const newFlower = req.body;
      console.log("📝 New Flower:", newFlower);

      // Directly store the base64 image data in the database
      const result = await flowerCollection.insertOne(newFlower);
      res.send(result);
    });

    // Update Flower (PUT)
    app.put('/flower/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedFlower = req.body;

        const flower = {
          $set: {
            name: updatedFlower.name,
            price: updatedFlower.price,
            season: updatedFlower.season,
            fragrance: updatedFlower.fragrance,
            description: updatedFlower.description,
            stock: updatedFlower.stock,
            image: updatedFlower.image, // Base64 image data
          },
        };

        const result = await flowerCollection.updateOne(filter, flower, options);
        res.send(result);
      } catch (error) {
        console.error("Update error:", error);
        res.status(500).send({ error: "Internal server error" });
      }
    });

    // Delete Flower (DELETE)
    app.delete('/flower/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await flowerCollection.deleteOne(query);
      res.send(result);
    });

  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

run().catch(console.dir);

// Root route
app.get('/', (req, res) => {
  res.send('Flower server is running');
});

// Start server
app.listen(port, () => {
  console.log(`Flower selling server is running on port ${port}`);
});
