import { Component,Input ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../app/product.service';
import {MatIconModule} from '@angular/material/icon';
import { ProComponent } from '../pro/pro.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,
    RouterLink,MatIconModule,ProComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [];
  cart:any[] = []
  index:any
  pronum:any = 21
  
 constructor( private service:ProductService) { }

GetProduct() {
 this.service.getProducts().subscribe((res:any) => {
   this.products = res.reverse()
 })
}

showmore(){
  this.pronum = this.pronum + 21
}

ngOnInit():void {
  this.GetProduct()
}

viri(ma3:any){
  if(ma3.quantity > ma3.product.pieces){
    ma3.quantity = ma3.product.pieces
  }
  if(ma3.quantity <= 0 ){
    ma3.quantity = 1
  }
  this.addToCart(ma3)
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
