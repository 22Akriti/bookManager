const express = require('express');
const router = express.Router();
const { addBook, getBooks } = require('../controllers/bookController');

console.log("control reached in book routes");
router.post('/books', addBook);
router.get('/books', getBooks);

module.exports = router;
