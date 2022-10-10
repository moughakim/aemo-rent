import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filterProductSelected = 'Tout';
  products: string[] = ['Robe', 'Bijoux', 'Tout'];
  selected: Date | null;
  priceMin = 0;
  priceMax = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
