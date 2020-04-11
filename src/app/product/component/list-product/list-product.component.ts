import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../../services/list-products.service';
import { DeleteProductService } from '../../services/delete-product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = null;

  constructor(private listService:ListProductsService, private deleteP:DeleteProductService) { }

  ngOnInit(): void {
    this.listProduct(); // el usuario debe verla desde el inicio, no debería llamarla. Debe ser automático.
  }

  listProduct() {
    this.listService.listProducts().subscribe(
      result => this.products = result
    );
  }

  deleteProduct(idProduct) {
    this.deleteP.deleteProduct(idProduct).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.listProduct();
        }
      }
    );
  }

}
