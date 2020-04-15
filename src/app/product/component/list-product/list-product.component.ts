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
  products = null;
  edit:boolean = false;

  id=null;
  nombre=null;
  descripcion=null;
  precio:number=null;

  array=[];
  array2=[];

  constructor(private listService:ListProductsService,
    private deleteP:DeleteProductService,
    private editP:UpdateProductService) { }

  ngOnInit(): void {
    this.listProduct(); // el usuario debe verla desde el inicio, no debería llamarla. Debe ser automático.
  }

  showEdit(id){
    this.getId(id);
    this.edit=true;    
  }

  listProduct() {
    this.listService.listProducts().subscribe( (result) =>{
      this.products = result
      console.log(this.products);
      
    }  );
  }

  deleteProduct(idProduct) {
    this.deleteP.deleteProduct(idProduct).subscribe(
    );
  }

  getId(id){
   this.id=id;
   console.log(this.id);
  }


  getArrJson(){
    this.array=Array.of(this.products);
    for(let arr of this.array[0]){
      if(arr['id_producto']==this.id){
        this.array2=arr;
        this.array2['nombre_producto']=this.nombre;
        this.array2['descripcion_producto']=this.descripcion;
        this.array2['precio_producto']=this.precio;
        
      }
    }
    console.log(this.array2);
    
    return this.array2;
  }

  editProduct() {
    this.editP.updateProduct(this.getArrJson()).subscribe();
  }

}
