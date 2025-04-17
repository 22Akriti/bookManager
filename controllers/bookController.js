const Book = require('../models/Book');

// POST /books
const addBook = async (req, res) => {
    console.log("control reahced in addbook controller");
    const { title, author, genre } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ error: 'Please provide title, author, and genre.' });
    }

    try {
        const newBook = new Book({ title, author, genre });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add book' });
    }
};

// GET /books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

module.exports = {
    addBook,
    getBooks,
};
