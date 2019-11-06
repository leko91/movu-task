import { BooksService } from './books.service';
import { BOOKS } from '../mocks/books';

describe('MyService', () => {
  let booksService;

  beforeEach(() => {
    booksService = new BooksService();
  });

  it('should return ten books', () => {
    expect(booksService.getBooks().value.length).toBe(10);
    expect(booksService.getBooks().value[0].name).toBe('Prowaste');

    expect(booksService.getPaginated(BOOKS).length).not.toBeGreaterThan(10);
  });
});
