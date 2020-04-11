import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  
  URL="http://localhost/api/";

  constructor(private http: HttpClient) { }

  deleteProduct(idProduct: number) {
    return this.http.get(`${this.URL}deleteProduct.php?id_producto=${idProduct}`);
  }
}
