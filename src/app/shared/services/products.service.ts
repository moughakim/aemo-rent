import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  /* create getProducts method that returns and array of products object
   each product object has a name and a price and a description
   and a category and a image and a quantity and a id and a list of future reserved dates
   and a list of past reserved dates and a list of past sold dates **/

  // tslint:disable-next-line:typedef
  getProducts() {
    return [
      {
        name: 'Robe Blanche',
        price: 100,
        description: 'Robe Blanche',
        category: 'Robe Blanche',
        thumbnail: 'robe_1.png',
        quantity: 10,
        id: 1,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Robe de soirée',
        price: 100,
        description: 'Robe de soirée',
        category: 'Robe de soirée',
        thumbnail: 'assets/images/robe-de-soiree.jpg',
        quantity: 10,
        id: 2,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Kaftan',
        price: 100,
        description: 'Kaftan',
        category: 'Kaftan',
        thumbnail: 'assets/images/kaftan.jpg',
        quantity: 10,
        id: 3,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Bedroune',
        price: 100,
        description: 'Bedroune',
        category: 'Bedroune',
        thumbnail: 'assets/images/bedroune.jpg',
        quantity: 10,
        id: 4,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Karakou',
        price: 100,
        description: 'Karakou',
        category: 'Karakou',
        thumbnail: 'assets/images/karakou.jpg',
        quantity: 10,
        id: 5,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Fergani',
        price: 100,
        description: 'Fergani',
        category: 'Fergani',
        thumbnail: 'assets/images/fergani.jpg',
        quantity: 10,
        id: 6,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Chaoui',
        price: 100,
        description: 'Chaoui',
        category: 'Chaoui',
        thumbnail: 'assets/images/chaoui.jpg',
        quantity: 10,
        id: 7,
        reservedDates: [],
        soldDates: []
      },
      {
        name: 'Kabyle/Berbere',
        price: 100,
        description: 'Kabyle/Berbere',
        category: 'Kabyle/Berbere',
        thumbnail: 'assets/images/kabyle-berbere.jpg',
        quantity: 10,
        id: 8,
        reservedDates: [],
        soldDates: []
      }
    ];
  }



}
