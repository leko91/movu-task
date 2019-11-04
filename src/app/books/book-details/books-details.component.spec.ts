import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksComponent } from '../books.component';
import { FormsModule } from '@angular/forms';

describe('BookDetailsComponent', () => {
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        BooksComponent,
        BookDetailsComponent
      ],
    }).compileComponents();
  }));

  it('should display book details', () => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    expect(fixture).toMatchSnapshot();
  });
});
