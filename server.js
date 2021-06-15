const express = require('express');
require('dotenv').config();

const app = express();
const db = require('./db');

const users = require('./book');


app.get('/book', book.findAllbook);
app.get('/bookorder', book.orderbook);
app.get('/pricenull', book.pricenNll);
app.get('/priceNOTnull', book.pricenNotNll);
app.post('/book', book.addbook);
app.put('/books:book_id', book.editbook)
app.delet('/books:book_id', book.deletbook)
const PORT = 3000;

app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
