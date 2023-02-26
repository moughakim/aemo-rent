import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit {

  imagePath: '/assets/img/';
  listProducts: any[];

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listProducts = this.productsService.getProducts();
    this.listProducts.forEach(product => product.thumbnail = '/assets/img/' + product.thumbnail);
  }

  openProductDetailsDialog(): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
