import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book';
import { AuthorsService } from '../../shared/services/authors.service';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: string;
  book: Book;
  bookQuantity: number;

  author: Author;

  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
    });

    this.getBook();
    this.getAuthor();
  }

  getBook() {
    const quantityKey = 'quantity';

    this.book = this.booksService.getBook(this.bookId);
    this.bookQuantity = this.book[quantityKey];
    this.renderer.addClass(document.body, 'details-open');
  }

  getAuthor() {
    this.author = this.authorsService.getAuthor(this.book);
  }

  closeDetails() {
    this.router.navigate(['../'], { relativeTo: this.route });

    this.renderer.removeClass(document.body, 'details-open');
  }

  editQuantity() {
    this.bookQuantity = this.booksService.editBookQuantity(this.bookId, this.bookQuantity);
  }
}
