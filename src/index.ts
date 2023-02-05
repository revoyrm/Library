import { AppDataSource } from "./data-source";
import { Book } from "./entity/Book";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new Book into the database...");
    const book = new Book();
    book.Title = "Timber";
    book.author = "Avery Fay";
    await AppDataSource.manager.save(book);
    console.log("Saved a new book with id: " + book.id);

    console.log("Loading books from the database...");
    const books = await AppDataSource.manager.find(Book);
    console.log("Loaded books: ", books);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
