import { BookService } from "../services/BookService";

class BookController {
  static CreateBook = async (req, res) => {
    try {
      const dbQuery = await BookService.createBook(req.body);

      return res.status(200).json(dbQuery);
    } catch (e) {
      return res.status(500).json({ status: "error", message: e.message });
    }
  };

  static GetAllBooks = async (req, res) => {
    try {
      const dbQuery = await BookService.getAllBooks();

      return res.status(200).json(dbQuery);
    } catch (e) {
      return res.status(500).json({ status: "error", message: e.message });
    }
  };

  static EditBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      const dbQuery = await BookService.editBook({ id: bookId, ...req.body });

      return res.status(200).json(dbQuery);
    } catch (e) {
      return res.status(500).json({ status: "error", message: e.message });
    }
  };

  static DeleteBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      const dbQuery = await BookService.deleteBook({ id: bookId });

      return res.status(200).json(dbQuery);
    } catch (e) {
      return res.status(500).json({ status: "error", message: e.message });
    }
  };
}

export { BookController };
