import { Component, OnInit } from '@angular/core';
import { BookModel} from '../Models/BlindBookModel.model';
import { GetCollectionService } from '../services/get-collection.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  bookCollection: BookModel[];
  selectedBook: BookModel;

  public expanded = false;


  constructor(private getCollectionService: GetCollectionService) { }

  ngOnInit(): void {
    this.bookCollection = this.getCollectionService.fillBookCollection();
    this.selectedBook = this.bookCollection[0];

    console.log(this.bookCollection)
  }

  onExpandFilter() {
    this.expanded = true;
  }

  onFlipBook() {

  }

  public onNextBook() {
    // this.selectedBook = this.bookCollection.find(book => book.blind.backend.isbn === book.blind.backend.isbn)

  }
}
