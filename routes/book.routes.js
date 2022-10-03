const Book = require("../models/Book.model");

const router = require("express").Router();


//List all books
router.get("/books", (req, res, next) => {
  Book.find()
  .then(booksFromDB =>{
   // console.log(booksFromDB)
   res.render("books/books-list", {books: booksFromDB})
  })
  .catch( err => {
    console.log("error getting books from DB", err);
    next();
  })
});


//Book details
router.get("/books/:bookId", (req, res, next) => {
  const id = req.params.bookId;
// res.send(`displaying details for book with id.... ${id}`)
  Book.findById(id)
  .then(bookDetails =>{
   //  console.log(bookDetails)

     res.render("books/book-details", bookDetails);
   })
  .catch( err => {
    console.log("error getting book details from DB", err);
    next();
  })
})

module.exports = router;