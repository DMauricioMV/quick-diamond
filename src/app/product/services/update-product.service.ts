import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {
  URL = "http://localhost/api/";
  
  constructor(private http: HttpClient) { }

  updateProduct(product) {
    return this.http.post(`${this.URL}editProduct.php`, JSON.stringify(product));
  }
}
