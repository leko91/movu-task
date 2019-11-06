import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/models/book';
import { BooksService } from '../shared/services/books.service';
import { Author } from '../shared/models/author';
import { AuthorsService } from '../shared/services/authors.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[];
  authors: Author[];

  booksPerPage = 10;
  totalPages: number;
  currentPage = 1;
  searchTerm: string;
  filteredAuthor = 'Select an author';

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.getBooks();
    this.getTotalPaginationPages();
  }

  getBooks() {
    this.booksService.getBooks().subscribe(
      res => {
        this.books = res;
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

  getTotalPaginationPages() {
    this.totalPages = this.booksService.getTotalPaginationPages();
  }

  getCurrentPaginationPage() {
    this.currentPage = this.booksService.getCurrentPaginationPage();
  }

  sortBooks(key: string) {
    this.books = this.booksService.sortBooks(key);
  }

  filterByAuthor(author: string) {
    this.filteredAuthor = author;
    this.searchTerm = '';
    this.books = this.booksService.filterByAuthor(author);
    this.getTotalPaginationPages();
    this.getCurrentPaginationPage();
  }

  nextPage() {
    this.books = this.booksService.nextPage();
    this.getCurrentPaginationPage();
  }

  prevPage() {
    this.books = this.booksService.prevPage();
    this.getCurrentPaginationPage();
  }

  goToPage(pageNumber: number) {
    this.books = this.booksService.goToPage(pageNumber);
    this.getCurrentPaginationPage();
  }

  searchBooks() {
    this.books = this.booksService.searchBooks(this.searchTerm);
    this.getTotalPaginationPages();
    this.getCurrentPaginationPage();
  }
}
