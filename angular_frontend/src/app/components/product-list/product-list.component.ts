import { Component, OnInit } from '@angular/core';
import product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product_service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:product[]=[];

  constructor(private productServicecut:ProductService) {
  }

  ngOnInit(): void {
    this.productServicecut.get_all_products().subscribe({
      next: (data => {
        console.log("hallow world"+data)
        this.products=data
      })
    })
  }

}
