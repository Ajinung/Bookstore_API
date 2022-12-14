import mongoose from "mongoose";

interface books {
  title: string;
  category: string;
  summary: string;
  view: [];
  isbn: string;
  author: string;
  authorImage: string;
  coverImage: string;
}

interface booksData extends books, mongoose.Document {}

const bookShema = new mongoose.Schema(
  {
    title: String,
    category: String,
    summary: String,
    view: [],
    isbn: String,
    author: String,
    authorImage: String,
    coverImage: String,
  },
  { timestamps: true }
);

export default mongoose.model<booksData>("books", bookShema);
