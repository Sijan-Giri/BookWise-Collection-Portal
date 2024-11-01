const { createBook, getBooks, updateBook, deleteBook } = require("../controller/bookController");

const router = require("express").Router();

router.route("/createBook").post(createBook);
router.route("/getBooks").get(getBooks);
router.route("/updateBook/:id").patch(updateBook);
router.route("/deleteBook/:id").delete(deleteBook); 

module.exports = router