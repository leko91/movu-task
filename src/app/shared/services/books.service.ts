import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BOOKS } from '../mocks/books';
import { Book } from '../models/book';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[];
  booksCopy: Book[];

  filteredBooks: Book[];
  filteredBooksCopy: Book[];

  searchedBooks: Book[];
  searchedBooksCopy: Book[];

  authors: Author[];

  booksSorted: any[] = ['', false];

  booksPerPage = 10;
  currentPage = 1;
  totalPages: number;
  isFiltered = false;
  isSearched = false;

  constructor() { }

  getBooks(): Observable<Book[]> {
    this.books = this.getPaginated(BOOKS);
    this.updateTotalPaginationPages();

    return of(this.books);
  }

  getPaginated(inputArray: Book[]): Book[] {
    return inputArray.slice((this.currentPage - 1) * this.booksPerPage, (this.currentPage) * this.booksPerPage);
  }

  updateTotalPaginationPages(books: Book[] = BOOKS) {
    this.totalPages = Math.ceil(books.length / this.booksPerPage);
  }

  getTotalPaginationPages() {
    return this.totalPages;
  }

  getCurrentPaginationPage() {
    return this.currentPage;
  }

  sortBooks(key: string) {
    if (this.booksSorted[0] === key) {
      this.booksSorted[1] = !this.booksSorted[1];
    } else {
      this.booksSorted = [key, true];
    }

    let sortArray: Book[];
    if (this.isFiltered && !this.isSearched) {
      sortArray = this.filteredBooksCopy;
    } else if (this.isSearched) {
      sortArray = this.searchedBooksCopy;
    } else {
      sortArray = BOOKS;
    }

    sortArray.sort((elem1, elem2) => {
      if (elem1[key] > elem2[key]) {
        return this.booksSorted[1] ? 1 : -1;
      }

      if (elem1[key] < elem2[key]) {
        return this.booksSorted[1] ? -1 : 1;
      }
    });

    if (this.isFiltered && !this.isSearched) {
      return this.getPaginated(this.filteredBooksCopy);
    } else if (this.isSearched) {
      return this.getPaginated(this.searchedBooksCopy);
    } else {
      return this.getPaginated(BOOKS);
    }
  }

  filterByAuthor(author: string = ''): Book[] {
    this.isSearched = false;

    if (author === '') {
      this.isFiltered = false;
      this.filteredBooks = [];
      this.currentPage = 1;
      this.books = this.getPaginated(BOOKS);
      this.updateTotalPaginationPages();
      return this.getPaginated(BOOKS);
    }

    const keyAuthor = 'author';
    this.filteredBooks = BOOKS.reduce((acc, cur) => {
      if (cur[keyAuthor] === author) {
        acc.push(cur);
      }
      return acc;
    }, []);
    this.filteredBooksCopy = this.filteredBooks;
    this.isFiltered = true;
    this.currentPage = 1;
    this.updateTotalPaginationPages(this.filteredBooksCopy);
    return this.getPaginated(this.filteredBooksCopy);
  }

  nextPage() {
    this.currentPage++;

    if (this.isFiltered && !this.isSearched) {
      return this.getPaginated(this.filteredBooksCopy);
    } else if (this.isSearched) {
      return this.getPaginated(this.searchedBooksCopy);
    } else {
      return this.getPaginated(BOOKS);
    }
  }

  prevPage() {
    this.currentPage--;

    if (this.isFiltered && !this.isSearched) {
      return this.getPaginated(this.filteredBooksCopy);
    } else if (this.isSearched) {
      return this.getPaginated(this.searchedBooksCopy);
    } else {
      return this.getPaginated(BOOKS);
    }
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;

    if (this.isFiltered && !this.isSearched) {
      return this.getPaginated(this.filteredBooksCopy);
    } else if (this.isSearched) {
      return this.getPaginated(this.searchedBooksCopy);
    } else {
      return this.getPaginated(BOOKS);
    }
  }

  searchBooks(searchTerm) {
    const keyName = 'name';
    let reduceArray: Book[];

    if (searchTerm === '' || searchTerm === undefined) {
      this.isSearched = false;
      this.currentPage = 1;

      if (this.isFiltered) {
        this.updateTotalPaginationPages(this.filteredBooksCopy);
        return this.getPaginated(this.filteredBooksCopy);
      } else {
        this.updateTotalPaginationPages(BOOKS);
        return this.getPaginated(BOOKS);
      }
    }

    if (this.isFiltered) {
      reduceArray = this.filteredBooksCopy;
    } else {
      reduceArray = BOOKS;
    }

    this.searchedBooks = reduceArray.reduce((acc, cur) => {
      if (cur[keyName].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        acc.push(cur);
      }

      return acc;
    }, []);

    if (this.searchedBooks.length === 0) {
      this.searchedBooks = [];
    }

    this.searchedBooksCopy = this.searchedBooks;
    this.isSearched = true;
    this.currentPage = 1;
    this.updateTotalPaginationPages(this.searchedBooksCopy);
    return this.getPaginated(this.searchedBooksCopy);
  }

  getBook(bookId: string) {
    const keyId = 'id';

    return BOOKS.find(res => res[keyId] === bookId);
  }

  editBookQuantity(bookId: string, newQuantity: number) {
    const keyId = 'id';
    const quantityId = 'quantity';

    return BOOKS[BOOKS.findIndex(elem => elem[keyId] === bookId)][quantityId] = newQuantity;
  }
}
