const db = require('./db');


const addbook = (req,res) => {
    const book1 = {
        title: req.body.title,
        author: req.body.author,
        published_at: req.body.published_at,
        price: req.body.price,
      };
      

    const command = `INSERT INTO book (title, author, published_at,price)
    VALUES (?, ? ,? ,?);`;
  
    const data = [book1.title, book1.author, book1.published_at, book1.price];
    db.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
       res.json(result);
    });
    
 
}










  const findAllbook = () => {
    const command = `SELECT * FROM book`;
  
    db.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      
    });
  };
  
  const editbook = (req, res) => {
    const book2 = {
        title: req.body.title,
        author: req.body.author,
        published_at: req.body.published_at,
        price: req.body.price,
      };
    const command = `
    UPDATE book
     SET title='?', author='?',published_at=?,price=?
    WHERE id=?;
    `;
    const data = [book1.title, book1.author, book1.published_at, book1.price];
    const arr = [req.params.id];
    db.query(command, arr, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result);
    });
  };
  


  const deletbook = (req, res) => {
    const command = `
    DELETE FROM book 
    WHERE id = ? AND is_deleted=0;
    `;
  
    const arr = [req.params.id];
    db.query(command, arr, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result);
    });
  };
  
  const orderbook = () => {
    const command = `SELECT * FROM book
    ORDER BY id DESC;`;
  
    db.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      
    });
  };
  

  const pricenNll = () => {
    const command = `SELECT price
    FROM book
    WHERE price IS NULL;`;
  
    db.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      
    });
  };

  const pricenNotNll = () => {
    const command = `SELECT price
    FROM book
    WHERE price IS NOT NULL;`;
  
    db.query(command, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      
    });
  };





  










  
module.exports = {
    findAllbook,
    addbook,
    editbook,
    deletbook,
    orderbook,
    pricenNll,
    pricenNotNll
  };
  