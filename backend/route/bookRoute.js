const { createBook, getBooks, updateBook, deleteBook, getSingleBook } = require("../controller/bookController");

const router = require("express").Router();
const {multer , storage} = require("./../middleware/multerConfig")
const upload = multer({storage : storage})

router.route("/createBook").post(upload.single("bookImage") , createBook);
router.route("/getBooks").get(getBooks);
router.route("/getBook/:id").get(getSingleBook);
router.route("/updateBook/:id").patch(upload.single("bookImage") , updateBook);
router.route("/deleteBook/:id").delete(deleteBook); 

module.exports = router