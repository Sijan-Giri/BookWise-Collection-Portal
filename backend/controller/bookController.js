const Book = require("../model/bookModel");

exports.createBook = async(req,res) => {
    try {
        const { bookName , bookPrice , isbnNumber , authorName , publishedAt } = req.body;
    if(!bookName || !bookPrice || !isbnNumber || !authorName || !publishedAt) {
        return res.status(400).json({
            message : "Please provide bookName , bookPrice , isbnNumber , authorName , publishedAt"
        })
    }
    const book = await Book.create({
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt
    });
    res.status(200).json({
        message : "Book created successfully",
        data : book
    })
    } catch (error) {
        console.log(error)
    }
}

exports.getBooks = async(req,res) => {
    try {
        const books = await Book. find();
    if(books.length == 0) {
        return res.status(404).json({
            message : "Books not found"
        })
    }
    res.status(200).json({
        message : "Book fetched successfully",
        data : books
    })
    } catch (error) {
        console.log(error)
    }
}

exports.getSingleBook = async(req,res) => {
    const {id} = req.params;
    if(!id) {
        return res.status(404).json({
            message : "Please provide id"
        })
    }
    const singleBook = await Book.findById(id);
    res.status(200).json({
        message : "Single book fetched successfully",
        data : singleBook
    })
}

exports.updateBook = async(req,res) => {
   try {
    const {id} = req.params;
    if(!id) {
        return res.status(404).json({
            message : "Please provide id"
        })
    }
    const { bookName , bookPrice , isbnNumber , authorName , publishedAt } = req.body;
    if(!bookName || !bookPrice || !isbnNumber || !authorName || !publishedAt) {
        return res.status(400).json({
            message : "Please provide bookName , bookPrice , isbnNumber , authorName , publishedAt"
        })
    }
    const updatedBook = await Book.findByIdAndUpdate(id,{
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt
    },{new : true});
    res.status(200).json({
        message : "Book updated successfully",
        data : updatedBook
    })
   } catch (error) {
    console.log(error)
   }
}

exports.deleteBook = async(req,res) => {
    try {
        const {id} = req.params;
    if(!id) {
        return res.status(404).json({
            message : "Please provide id"
        })
    };
    const book = await Book.findByIdAndDelete(id);
    if(!book) {
        return res.status(404).json({
            message : "Book not found"
        })
    };
    res.status(200).json({
        message : "Book deleted successfully"
    })
    } catch (error) {
        console.log(error)
    }
}