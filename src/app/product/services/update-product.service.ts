import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {

  constructor(private http:HttpClient) { }

  updateProduct(){
    
  }
}
