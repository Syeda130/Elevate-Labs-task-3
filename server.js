const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//GET
app.get('/books', (req, res) => {
    res.json(books) 
})

//POST
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

//PUT
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  // Find the book with the matching ID
  const book = books.find(book => book.id === id);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book); 
});

//DELETE
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
//   res.status(204).send(); 
  res.json({ message: "Book deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



let books = [
    {
        id: 1,
        title: "Book 1",
        author: "Author 1",
    },
    {
        id: 2,
        title: "Book 2",
        author: "Author 2",
    },
    {
        id: 3,
        title: "Book 3",
        author: "Author 3",
    },
     {
        id: 4,
        title: "Book 4",
        author: "Author 4",
    },
    {
        id: 5,
        title: "Book 5",
        author: "Author 5",
    }
];