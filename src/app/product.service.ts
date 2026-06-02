import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { environment } from 'src/environments/environment';*/

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  getProductById(id:any) {
    return this.http.get('http://localhost:3000/products/'+id);
  }

  /*getCategories(){
    return this.http.get('http://localhost:3000/Categorie');
  }*/

  getProductsByCategorie(Categorie:any) {
    return this.http.get('http://localhost:3000/products?Categorie='+Categorie);
  }

  categories(){
    return this.http.get('http://localhost:3000/Categories');
  }

  getProductsBySeller(seller:any) {
    return this.http.get('http://localhost:3000/products?seller='+seller);
  }

}
