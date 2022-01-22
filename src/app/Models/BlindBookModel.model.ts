
export enum GenreNames {
  'Fantasy',
  'Romance',
  'Thriller',
  'young adult',
  'non-fiction'
}


export enum Trigger { // max 5
  'sh/su',
  'drugs',
  'rape'
}

export enum Mood { // max 8
  'dark',
  'light',

}


export enum nomScale {
  'low',
  'middle',
  'high'
}

export enum Series {
  'standalone',
  'series',
}

// first stage
export class BookModel {
  backend: {
    isbn: string;
    url?: {buy?: string, goodreads?: string, storygraph?: string};
  };

  dimensions: {
    heightWidth?: nomScale;
     length: nomScale;
  };

  character: {
    genreName: GenreNames[];          // min 1 entry
    trigger: Trigger[];
    mood: Mood[];         // min 1 entry
    paced: nomScale;
    series?: Series;
    adaption?: 'to-be-concluded' | 'book-to-new-media' | 'new-media-to-book';
  };

  additionalInformation: {
    text: string;           // min 24 zeichen max 480
    price?: nomScale;
    relatedFields: RelatedFieldsEntry[];
    theme?: Theme[];
    additionalText?: string;
  };
}



export enum Theme {
  'revenge',
  'love',
  'growth',
  'balance',
  'unity',
  'anarchy',
  'misc',
}

export interface RelatedFields {
    rel: RelatedFieldsEntry,
    his: RelatedFieldsEntry,
    soc: RelatedFieldsEntry,
    phil: RelatedFieldsEntry,
    psy: RelatedFieldsEntry,
    stem: RelatedFieldsEntry,
    pol: RelatedFieldsEntry,
    eco: RelatedFieldsEntry,
    law: RelatedFieldsEntry,
    tech: RelatedFieldsEntry,
}


export interface RelatedFieldsEntry {
  title: string,
  additional?: string[]
}
