import { Router } from "express";
import {
  postBook,
  getAllbooks,
  getOneBook,
  searchBooks,
  myViews,
} from "../controller/book_controller";
import { coverUpload } from "../config/book_multer";

const router = Router();

router.route("/newBook").post(coverUpload, postBook);
router.route("/getall").get(getAllbooks);
router.route("/getone/:id").get(getOneBook);
router.route("/search").get(searchBooks);
router.route("/views/:id").patch(myViews);

export default router;
