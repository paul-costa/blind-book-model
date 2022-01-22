import { Component, OnInit } from '@angular/core';
import { BlindBookModel, WokeBookModel } from '../Models/BlindBookModel.model';
import { GetCollectionService } from '../services/get-collection.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  bookCollection: {blind: BlindBookModel, woke: WokeBookModel}[];


  constructor(private getCollectionService: GetCollectionService) { }

  ngOnInit(): void {
    this.bookCollection = this.getCollectionService.fillBookCollection();
    console.log(this.bookCollection)
  }

}
