import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: Product[] = [
    new Product(
      1,
      'Beefsteak',
      '/assets/images/product/product-1.jpg',
      '30.00',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates id, quibusdam eum explicabo quaerat odio neque, accusamus esse molestiae voluptatem ipsam nemo! Nihil non laudantium eius voluptatum atque aut illo.',
      '0.5'),
    new Product(
      2,
      'SeaCrab',
      '/assets/images/product/product-2.jpg',
      '40.00',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates id, quibusdam eum explicabo quaerat odio neque, accusamus esse molestiae voluptatem ipsam nemo! Nihil non laudantium eius voluptatum atque aut illo.',
      '1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
