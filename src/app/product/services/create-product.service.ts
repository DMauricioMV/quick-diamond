import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  URL:string = "http://localhost/api/";

  constructor(private http:HttpClient) { }

  createProduct(product){
    return this.http.post(`${this.URL}createProduct.php`,JSON.stringify(product));
  }
}
