import express from "express";
import { BookController } from "./controllers/BooksController";

const Router = express.Router();

Router.get("/book", (req, res) => {
  return res.json({
    id: 1,
    title: "harry poter",
    publisher: "rocco",
    photo: "blabla.png",
    authors: "Jk",
  });
});

Router.post("/obras", BookController.CreateBook);

Router.get("/obras", BookController.GetAllBooks);

Router.put("/obras/:bookId", BookController.EditBook);

Router.delete("/obras/:bookId", BookController.DeleteBook);

export { Router };
