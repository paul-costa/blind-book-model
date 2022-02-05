
export enum GenreNames {
  'Fantasy',
  'Romance',
  'Thriller & Crime',
  'Young Adult',
  'Non-fiction',
  'Classical Literature',
  'Dystopia',
  'Erotica',
  'Historical',
  'Horror',
  'LGBTQIA+',
  'Magical Realism',
  'Mystery',
  'Philosophy',
  'Science Fiction',
  'Self-Help',
  'Travel',
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


export enum NomScale {
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
    heightWidth?: NomScale;
     length: NomScale;
  };

  character: {
    genreName: GenreNames[];          // min 1 entry
    trigger: Trigger[];
    mood: Mood[];         // min 1 entry
    paced: NomScale;
    series?: Series;
    adaption?: 'to-be-concluded' | 'book-to-new-media' | 'new-media-to-book';
  };

  additionalInformation: {
    text: string;           // min 24 zeichen max 480
    price?: NomScale;
    relatedFields: RelatedFieldsEntry[];
    additionalText?: string;
  };
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
