import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filterProductSelected = 'Tout';
  products: string[] = ['Tout', 'Robe Blanche', 'Robe de soirée', 'Kaftan', 'Bedroune', 'Karakou', 'Fergani', 'Chaoui', 'Kabyle/Berbere', 'Oranais'];
  selected: Date | null;
  searchTerm: string;

  constructor() { }

  ngOnInit(): void {
  }

}

