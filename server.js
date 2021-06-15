const express = require('express');
require('dotenv').config();

const app = express();
const db = require('./db');

const book = require('./book');


app.get('/book', book.findAllbook);
app.get('/bookOrder', book.orderbook);
app.get('/priceNull', book.pricenNll);
app.get('/priceNOTNull', book.pricenNotNll);
app.post('/book', book.addbook);
app.put('/books:book_id', book.editbook)
app.delete('/books:book_id', book.deletbook)
const PORT = 3000;

app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
