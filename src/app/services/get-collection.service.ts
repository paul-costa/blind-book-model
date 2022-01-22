import { Injectable, OnInit } from '@angular/core';
import { BookModel, GenreNames, Mood, nomScale, RelatedFields, Series, Theme, Trigger } from '../Models/BlindBookModel.model';

@Injectable({
  providedIn: 'root'
})
export class GetCollectionService {


  constructor() {}

  public fillBookCollection(): BookModel[] {
    const book1: BookModel = {
      backend:{
        isbn: '123',
        url: {buy: 'string', goodreads: 'string', storygraph: 'string'},
      },
      dimensions:{
        length: nomScale.middle,
      },

      character:{
        genreName: [GenreNames.Fantasy],
        trigger: [Trigger.drugs],
        mood: [Mood.dark],
        paced: nomScale.low,
        series: Series.standalone,
        adaption: 'to-be-concluded',
      },
      additionalInformation:{
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet aliquam quisquam ullam omnis eligendi laudantium, alias quos porro cupiditate dolore vitae velit fugit deserunt ex repellat dignissimos perferendis quidem.',
        price: nomScale.high,
        relatedFields: [this.getRelatedFields().rel, this.getRelatedFields().tech],
        theme: [Theme.anarchy],
        additionalText: 'addy',
      },
    }

    return [book1, book1, book1];
}




  public getRelatedFields(): RelatedFields {
    return {
      rel: {title: 'Religion', additional:[]},
      his: {title: 'History', additional:[]},
      soc: {title: 'Sociology', additional:[]},
      phil: {title: 'Philosophy', additional:[]},
      psy: {title: 'Psychology', additional:[]},
      stem: {title: 'STEM fields', additional:[]},
      pol: {title: 'Politics', additional:[]},
      eco: {title: 'Economy', additional:[]},
      law: {title: 'Law', additional:[]},
      tech: {title: 'Technology', additional:[]},
    };
  }
}













