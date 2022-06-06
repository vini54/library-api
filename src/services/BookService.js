import { dbSync } from "../configs/database";

class BookService {
  static createBook = async (data) => {
    const { title, publisher, photo, authors } = data;

    const dbQuery = await dbSync.book.create({
      data: {
        title,
        publisher,
        photo,
        authors: { ...authors },
      },
    });

    if (!dbQuery) throw new Error("database error");

    return dbQuery;
  };

  static getAllBooks = async () => {
    const dbQuery = await dbSync.book.findMany();

    if (!dbQuery) throw new Error("database error");

    return dbQuery;
  };

  static editBook = async (data) => {
    const { id, title, publisher, photo, authors } = data;

    const dbQuery = await dbSync.book.update({
      where: {
        id: id,
      },
      data: {
        title,
        publisher,
        photo,
        authors: { ...authors },
      },
    });

    if (!dbQuery) throw new Error("database error");

    return dbQuery;
  };

  static deleteBook = async ({ id }) => {
    const dbQuery = await dbSync.book.delete({
      where: {
        id,
      },
    });

    if (!dbQuery) throw new Error("database error");

    return dbQuery;
  };
}

export { BookService };
