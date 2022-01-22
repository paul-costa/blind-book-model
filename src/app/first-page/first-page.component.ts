import { Component, OnInit } from '@angular/core';
import { BlindBookModel, WokeBookModel } from '../Models/BlindBookModel.model';
import { GetCollectionService } from '../services/get-collection.service';

export interface BookModel {
  blind: BlindBookModel,
  woke: WokeBookModel
}
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  bookCollection: {blind: BlindBookModel, woke: WokeBookModel}[];
  selectedBook: {blind: BlindBookModel, woke: WokeBookModel};

  public expanded = false;


  constructor(private getCollectionService: GetCollectionService) { }

  ngOnInit(): void {
    this.bookCollection = this.getCollectionService.fillBookCollection() as BookModel[];
    this.selectedBook = this.bookCollection[0];
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
