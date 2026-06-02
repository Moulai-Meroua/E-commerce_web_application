import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProincartComponent } from '../proincart/proincart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule , CommonModule , ProincartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  total:any = 0
  cart:any[]=[]
  like:any[] = []
  chk:boolean = false


  getCartProducts(){
    if("cart" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cart")!)
      /*this.cart = this.cart.map(item => ({
        ...item,
        checked:false
      }))*/
    }  
    
    console.warn(this.cart)
    this.Total()
  }

  plus(rac:any){
    if(rac.quantity < rac.product.pieces){
    rac.quantity = rac.quantity + 1
    this.Total()}
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  minz(racm:any){
    if(racm.quantity >1){
    racm.quantity = racm.quantity - 1
    this.Total()}
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  savechange(){
    this.Total()
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  Delete(Product:any){
    if("cart" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cart")!)
    let index = this.cart.findIndex(x => x.product.id === Product.product.id);
    this.cart.splice(index , 1)
    this.Total()
    localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }

  Total(){
    this.total = 0
    for ( let item in this.cart ){
      this.total = this.total + this.cart[item].product.priz * this.cart[item].quantity
    }
    return this.total
  }

  clearcart(){
    this.cart = []
    this.Total()
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  Like(pro:any){
    if("like" in localStorage){
      this.like = JSON.parse(localStorage.getItem("like")!)
    if(pro.checked == true){
    this.like.push(pro)
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }else{
    console.log(pro.product.id)
  let no = this.like.find(dodo => dodo.id == pro.id)
  if(no){
    let ind = this.like.findIndex(x => x.product.id === pro.product.id);
    this.like.splice(ind , 1)
  }
  localStorage.setItem("like" , JSON.stringify(this.like) )
  localStorage.setItem("cart", JSON.stringify(this.cart))
}
localStorage.setItem("like" , JSON.stringify(this.like) )
}else{
  if(pro.checked == true){
    this.like.push(pro)
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }else{
    console.log(pro.product.id)
  let no = this.like.find(dodo => dodo.id == pro.id)
  if(no){
    let ind = this.like.findIndex(x => x.productid === pro.productid);
    this.like.splice(ind , 1)
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}
localStorage.setItem("like" , JSON.stringify(this.like) )
localStorage.setItem("cart", JSON.stringify(this.cart))
}

}
 

  ngOnInit():void {
    this.getCartProducts()
    this.Total()

  }

}


