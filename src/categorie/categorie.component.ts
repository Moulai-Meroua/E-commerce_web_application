import { Component ,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../app/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProComponent } from '../pro/pro.component';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [RouterLink,CommonModule,ProComponent],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{
  data:any = []
  cart:any[] = []
  categorie:any
  pop:any
  pronum:any = 21
  /*Categories: any[] = [];
   
  Categorie:any*/

  constructor( private service:ProductService,private route:ActivatedRoute ) { 
    this.categorie = this.route.snapshot.paramMap.get("Categorie")
    console.log(this.categorie)
    this.getProducts(this.categorie)
    this.pop=this.categorie
  }
 
 /*GetProduct() {
  this.service.getProductByCategorie(this.Categorie).subscribe((res:any) => {
    this.Categories = res
    console.warn(res)
  })
 }
 */
 getProducts(ev:any) {
  this.service.getProductsByCategorie(ev).subscribe((res:any) => {
    this.data = res.reverse()
    console.warn(res)
     
  })
}

showmore(){
  this.pronum = this.pronum + 21
}

 ngOnInit():void {
   /*this.GetProduct()*/
   /*this.getProducts()*/
 }

 addToCart(event:any){
  if("cart" in localStorage){
    this.cart = JSON.parse(localStorage.getItem("cart")!)
    let ex = this.cart.find(item => item.product.id == event.product.id)
    if(ex){
      alert("this product is already in the cart ✨")
    }else{
    this.cart.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }else{
    this.cart.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}

}
