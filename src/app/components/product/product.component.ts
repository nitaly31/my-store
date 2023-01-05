import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  }
  @Output() addProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addProduct.emit(this.product);
  }
}
