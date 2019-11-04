import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('BooksComponent', () => {
  let fixture: ComponentFixture<BooksComponent>;

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
    fixture = TestBed.createComponent(BooksComponent);
    expect(fixture).toMatchSnapshot();
  });
});
