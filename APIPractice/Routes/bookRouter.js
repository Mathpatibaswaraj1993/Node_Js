const express = require('express')
const app = express()
const Book = require('../Models/book')
const mongoose = require('mongoose')

const router = express.Router()
app.use(express.urlencoded({ extended: true }));


// const Book = require('./models/Book'); // Adjust the path as needed

// Add a new book
// try {
//     const { book_name, price, author, qty, pubdate, category } = req.body;

//     // Basic validation
//     if (!book_name || !price || !author || !qty || !pubdate || !category) {
//         res.status(400).json({ msg: 'All fields are required.' });
//     }

//     const newBook = new Book({
//         book_name,
//         price,
//         author,
//         qty,
//         pubdate,
//         category
//     });

//     const savedBook = await newBook.save();
//     res.status(201).json(savedBook);
// } catch (error) {
//     res.status(500).json({ err: error.message });
// }

router.post('/addBook', async (req, res) => {
    try {
        await new Book(req.body).save();
        res.status(201).json({ msg: "Document Added Successfully!!!" });
    } catch (error) {
        console.error('Error adding book:', error); // Logs actual error for debugging
        res.status(500).json({ err: "Failed to add book. Please try again later." });
    }
});

//Get All Books  from Book collections

router.get("/", async (req, res) => {
    try {
        const AllBook = await Book.find()
        res.status(200).json(AllBook)
    }
    catch (error) {
        res.status(500).json({ err: error.message })
    }
})


//Get Book by Author
router.get('/getBookByAuthor/:authorName', async (req, res) => {
    try {
        const authorName = req.params.authorName;

        if (typeof authorName !== 'string' || !authorName.trim()) {
            return res.status(400).json({ err: "Author name must be a non-empty string" });
        }

        const books = await Book.find({
            author: { $regex: new RegExp(authorName, 'i') }
        });

        if (books.length === 0) {
            return res.status(404).json({ msg: "Book Not Found" });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books by author:', error);
        res.status(500).json({ err: "Internal Server Error" });
    }
});



router.get('/getBookByCategory/:category', async (req, res) => {
    try {
        const cate = req.params.category;

        // Validate the category parameter
        if (typeof cate !== 'string' || cate.trim() === '') {
            return res.status(400).json({ err: "Category must be a non-empty string" });
        }

        // Query books by category (case-insensitive)
        const books = await Book.find({
            category: { $regex: new RegExp(cate, 'i') }
        });

        // If no books found
        if (!books || books.length === 0) {
            return res.status(404).json({ msg: "No books found in this category" });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books by category:', error);
        res.status(500).json({ err: "Internal Server Error" });
    }
});


module.exports = router;


