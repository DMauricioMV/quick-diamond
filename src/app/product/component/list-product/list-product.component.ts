import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../../services/list-products.service';
import { DeleteProductService } from '../../services/delete-product.service';
import { Product } from '../../product';
import { UpdateProductService } from '../../services/update-product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products:Product = null;

  constructor(private listService:ListProductsService,
    private deleteP:DeleteProductService,
    private editP:UpdateProductService) { }

  ngOnInit(): void {
    this.listProduct(); // el usuario debe verla desde el inicio, no debería llamarla. Debe ser automático.
  }

  listProduct() {
    this.listService.listProducts().subscribe( (result:Product) =>{
      this.products = result
      console.log(this.products);
      
    }  );
  }

  deleteProduct(idProduct) {
    this.deleteP.deleteProduct(idProduct).subscribe();
  }

  editProduct() {
    this.editP.updateProduct(this.products).subscribe();
  }

}
