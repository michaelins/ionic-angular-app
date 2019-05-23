import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Blasket Islands',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic corrupti, iste tempore cum voluptatum, facere impedit expedita nihil ducimus officia sequi eos eaque ut aspernatur voluptas odit delectus molestiae.',
      '/assets/images/Blasket Islands, Ireland 1920x1080.jpg',
      189.99
    ),
    new Place(
      'p2',
      'Blyde River Canyon',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic corrupti, iste tempore cum voluptatum, facere impedit expedita nihil ducimus officia sequi eos eaque ut aspernatur voluptas odit delectus molestiae.',
      '/assets/images/Blyde River Canyon 1920x1080.jpg',
      229.99
    ),
    new Place(
      'p3',
      'Nan Province',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic corrupti, iste tempore cum voluptatum, facere impedit expedita nihil ducimus officia sequi eos eaque ut aspernatur voluptas odit delectus molestiae.',
      '/assets/images/Nan Province, Thailand 1920x1080.jpg',
      89.99
    ),
    new Place(
      'p4',
      'Numa Falls',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic corrupti, iste tempore cum voluptatum, facere impedit expedita nihil ducimus officia sequi eos eaque ut aspernatur voluptas odit delectus molestiae.',
      '/assets/images/Numa Falls, Canada 1920x1080.jpg',
      269.99
    ),
    new Place(
      'p5',
      'Sisteron',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi hic corrupti, iste tempore cum voluptatum, facere impedit expedita nihil ducimus officia sequi eos eaque ut aspernatur voluptas odit delectus molestiae.',
      '/assets/images/Sisteron, France 1920x1080.jpg',
      389.99
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(placeId: string) {
    return { ...this._places.find(p => p.id === placeId) };
  }

  constructor() { }
}
