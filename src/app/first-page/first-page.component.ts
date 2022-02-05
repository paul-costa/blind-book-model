import { Component, OnInit } from '@angular/core';
import { BookModel, GenreNames, Mood, Trigger} from '../Models/BookModel.model';
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

  public genreNames = GenreNames;
  public mood = Mood;
  public trigger = Trigger;

  constructor(private getCollectionService: GetCollectionService) { }

  ngOnInit(): void {
    this.bookCollection = this.getCollectionService.fillBookCollection();
    this.selectedBook = this.bookCollection[0];
  }

  onNavigate(type: 'prev' | 'next') {

  }
}
