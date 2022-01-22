
export enum GenreNames {
  'Fantasy',
  'Romance',
  'Thriller',
  'young adult',
  'non-fiction'
}


export enum Trigger {
  'sh/su',
  'drugs',
  'rape'
}

export enum Mood {
  'dark',
  'light'
}


export enum nomScale {
  'low',
  'middle',
  'high'
}

export enum Series {
  false,
  'standalone',
  'series',
}


// first stage
export class BlindBookModel {
  dimensions: {
    heightWidth?: nomScale;

  };

  character: {
    genreName?: GenreNames[];
    trigger?: undefined | Trigger[];
    mood?: Mood[];
    paced?: nomScale;
    series?: Series;
    adaption?: undefined | false | 'book-to-new-media' | 'new-media-to-book';
  };

  additionalInformation: {
    text?: string;           // min 280 zeichen
  };
}


export enum PrecedingKnowledgeNeeded {
  'religion',
  'history',
  'sociology',
  'philosophy',
  'psychology',
  'stem',
  'politics',
  'economy',
  'law',
  'technology',
}

export enum Theme {
  'revenge',
  'love',
  'growth',
  'balance',
  'unity',
  'anarchy',
  'misc'
}


// second stage
export class WokeBookModel {
  dimensions: {
    length?: nomScale
    backType?: 'paper' | 'hard';
  };

  additionalInformation: {
    price?: undefined | nomScale;
    precedingKnowledgeNeeded?: undefined | PrecedingKnowledgeNeeded[];
    motive?: Theme[];
  }
}
