const express = require("express");
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


//mongodb connection


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.siu5qhz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const brandDataCollection = client.db('FoodDB').collection('foodBrandList');
        const productDataCollection = client.db('FoodDB').collection('productList');
        const cartDataCollection = client.db('FoodDB').collection('cartList');

        app.post('/add-product', async (req, res) => {
            const product = req.body;
            console.log(product)
            const result = await productDataCollection.insertOne(product);
            res.send(result)
        })

        app.post('/cart', async (req, res) => {
            const cartProduct = req.body;
            const result = await cartDataCollection.insertOne(cartProduct);
            res.send(result)
        })

        app.get('/brands', async (req, res) => {
            const cursor = brandDataCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/:brand', async (req, res) => {
            const brand = req.params.brand
            const query = { slug: brand }
            const result = await brandDataCollection.findOne(query);
            res.send(result)
        })

        app.get('/products/:brand', async (req, res) => {
            const brand = req.params.brand

            const query = { brandname: brand }
            const cursor = productDataCollection.find(query)
            const result = await cursor.toArray();

            res.send(result)
        })

        app.get("/product/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await productDataCollection.findOne(query)
            res.send(result);
        })

        app.get("/cart/:email", async (req, res) => {
            const userEmail = req.params.email
            const query = { email: userEmail }
            const cursor = cartDataCollection.find(query)
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get("/update/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productDataCollection.findOne(query)
            res.send(result);
        })

        app.put("/update/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updateProd = req.body
            const details = {
                $set: {
                    name: updateProd.name,
                    brandname: updateProd.brandname,
                    price: updateProd.price,
                    rating: updateProd.rating,
                    type: updateProd.type,
                    photo: updateProd.photo,
                }
            }
            const result = await productDataCollection.updateOne(query, details, options)
            res.send(result);
        })

        app.delete("/cart/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: id }
            const result = await cartDataCollection.deleteOne(query)
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send('Tastify server is running');
})

app.listen(port, () => {
    console.log("This server is running on port: ", port);
})