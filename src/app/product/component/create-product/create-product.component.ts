import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { CreateProductService } from '../../services/create-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 
  product:Product ={
    id:null,
    name: null,
    descount:null,
    price:null,
    description:null,
    returning:null,
  }

  constructor(private createPServ: CreateProductService) { }

  ngOnInit(): void {
  }

  createProduct() {
    
    this.createPServ.createProduct(this.product).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
        }
      }
    );
  }

}
