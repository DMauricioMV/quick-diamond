import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {
  URL="http://localhost/api/";
  
  constructor(private http:HttpClient) { }

  listProducts() {
    return this.http.get(`${this.URL}listProduct.php`);
  }
}
