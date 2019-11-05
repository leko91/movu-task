import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BooksService } from './books.service';
import { Author } from './author';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  booksCopy: Book[] = [];

  filteredBooks: Book[] = [];
  filteredBooksCopy: Book[] = [];

  searchedBooks: Book[] = [];
  searchedBooksCopy: Book[] = [];

  authors: Author[];

  booksSorted = false;
  booksPerPage = 10;
  currentPage = 1;
  totalPages: number;
  isFiltered = false;
  searchTerm = '';

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
  }

  getBooks() {
    this.booksService.getBooks().subscribe(
      res => {
        this.booksCopy = res;
        this.books = this.getPaginated(res);
        this.totalPages = this.getTotalPages(this.booksCopy);
      },
      err => {
        alert(err);
      }
    );
  }

  getAuthors() {
    this.authorsService.getAuthors().subscribe(
      res => {
        this.authors = res;
      },
      err => {
        alert(err);
      }
    );
  }

  getPaginated(inputArray) {
    return inputArray.slice((this.currentPage - 1) * this.booksPerPage, (this.currentPage) * this.booksPerPage);
  }

  getTotalPages(inputArray) {
    return Math.round(inputArray.length / this.booksPerPage);
  }

  // Basic sort
  sortBooks(key) {
    this.booksSorted = !this.booksSorted;

    let sortArray;
    if (this.isFiltered) {
      sortArray = this.filteredBooksCopy;
    } else {
      sortArray = this.booksCopy;
    }

    sortArray.sort((elem1, elem2) => {
      if (elem1[key] > elem2[key]) {
        return this.booksSorted ? 1 : -1;
      }

      if (elem1[key] < elem2[key]) {
        return this.booksSorted ? -1 : 1;
      }
    });

    if (this.isFiltered) {
      this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
    } else {
      this.books = this.getPaginated(this.booksCopy);
    }
  }

  // Dropdown filter
  filterByAuthor(author) {
    if (author === undefined) {
      this.isFiltered = false;
      this.filteredBooks = [];
      this.currentPage = 1;
      this.books = this.getPaginated(this.booksCopy);
      this.totalPages = this.getTotalPages(this.booksCopy);
      return;
    }

    const keyAuthor = 'author';
    this.filteredBooks = this.booksCopy.reduce((acc, cur) => {
      if (cur[keyAuthor] === author) {
        acc.push(cur);
      }
      return acc;
    }, []);
    this.filteredBooksCopy = this.filteredBooks;
    this.isFiltered = true;
    this.currentPage = 1;
    this.totalPages = this.getTotalPages(this.filteredBooks);
    this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
  }

  // Pagination
  nextPage() {
    this.currentPage++;

    if (this.isFiltered) {
      this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
    } else {
      this.books = this.getPaginated(this.booksCopy);
    }
  }

  prevPage() {
    this.currentPage--;

    if (this.isFiltered) {
      this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
    } else {
      this.books = this.getPaginated(this.booksCopy);
    }
  }

  goToPage(page) {
    this.currentPage = page;

    if (this.isFiltered) {
      this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
    } else {
      this.books = this.getPaginated(this.booksCopy);
    }
  }

  // Search
  search() {
    const keyName = 'name';

    let sortArray;
    if (this.isFiltered) {
      sortArray = this.filteredBooksCopy;
    } else {
      sortArray = this.booksCopy;
    }

    this.filteredBooks = sortArray.reduce((acc, cur) => {
      if (cur[keyName].toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
        acc.push(cur);
      }

      return acc;
    }, []);

    if (this.filteredBooks.length === 0) {
      this.filteredBooks = [];
    }

    this.filteredBooksCopy = this.filteredBooks;
    this.isFiltered = true;
    this.currentPage = 1;
    this.totalPages = this.getTotalPages(this.filteredBooks);
    this.filteredBooks = this.getPaginated(this.filteredBooksCopy);
  }
}
