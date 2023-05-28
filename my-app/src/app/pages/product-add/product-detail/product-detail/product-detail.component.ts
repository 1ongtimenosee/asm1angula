import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: Iproduct ={
    name: "",
    price:0,
  }
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService){
    this.route.paramMap.subscribe(param =>{
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product =>{
      this.product = this.product;
  },error => console.error(error.message));
})
}
}
