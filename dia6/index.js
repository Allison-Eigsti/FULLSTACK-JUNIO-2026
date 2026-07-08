require('dotenv').config();
const express = require('express');
const productRouter = require('./routes/products.js')

const connectDB = require('./config/db.js')
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/products', productRouter);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


