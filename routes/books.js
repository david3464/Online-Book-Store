var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var Book = require('../models/book');
var Author = require('../models/author');
var uploadPath = path.join('public', Book.coverImageBasePath);
var importMineTypes =['images/jpeg','images/png','images/gif']
var upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) =>{
        callback(null, imageMineTypes.includes(file.mimetype))
    }
})

// All Book Route
router.get('/', async (req, res, next) => {
    res.send('All Books')
});

//New Book Route
router.get('/new', async (req, res) => {
    renderNewPage(res, new Book())
});

//Create Book Route
router.post('/', upload.single('cover'), async (req, res) => {
    const fileName = req.file !=null ? req.file.filename : null
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    })

    try {
        const newBook = await book.save()
        res.redirect('/books')

    } catch {
        renderNewPage(res, book, true)
    }
});

async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find ({})
        const params = {
        authors: authors,
        book: book
        }
        if(hasError) params.error = 'Error Creating Book'
        res.render('books/new', params)
    } catch {
        res. redirect('/books')
        console.log(error)

    }
}
module.exports = router;
