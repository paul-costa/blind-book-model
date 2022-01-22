import { Injectable, OnInit } from '@angular/core';
import { BlindBookModel, WokeBookModel } from '../Models/BlindBookModel.model';

@Injectable({
  providedIn: 'root'
})
export class GetCollectionService {



  constructor() {}

  public fillBookCollection() {
    return [{
      blind: {
        dimensions: {
          heightWidth: undefined,
          backType: undefined,
        },
        character: {
          genreName: undefined,
          trigger: undefined,
          mood: undefined,
          paced: undefined,
          series: undefined,
          adaption: undefined,
        },
        additionalInformation: {
          text: undefined,
        },
        },
        woke: {
            dimensions: {

              length: undefined,
            },

            additionalInformation: {
              price: undefined,
              precedingKnowledgeNeeded: undefined,
              motive: undefined,
            }
          },
        },

        {
          blind: {
            dimensions: {
              heightWidth: undefined,
              backType: undefined,
            },
            character: {
              genreName: undefined,
              trigger: undefined,
              mood: undefined,
              paced: undefined,
              series: undefined,
              adaption: undefined,
            },
            additionalInformation: {
              text: undefined,
            },
        },
        woke: {
            dimensions: {

              length: undefined,
            },

            additionalInformation: {
              price: undefined,
              precedingKnowledgeNeeded: undefined,
              motive: undefined,
            }
          },
        },

        {
          blind: {
            dimensions: {
              heightWidth: undefined,
              backType: undefined,
            },
            character: {
              genreName: undefined,
              trigger: undefined,
              mood: undefined,
              paced: undefined,
              series: undefined,
              adaption: undefined,
            },
            additionalInformation: {
              text: undefined,
            },
        },
        woke: {
            dimensions: {

              length: undefined,
            },

            additionalInformation: {
              price: undefined,
              precedingKnowledgeNeeded: undefined,
              motive: undefined,
            }
          },
        },
  ]
}}
