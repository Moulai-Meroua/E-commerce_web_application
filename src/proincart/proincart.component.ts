import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proincart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './proincart.component.html',
  styleUrl: './proincart.component.css'
})
export class ProincartComponent {

  @Input () pro:any = {};
  cart:any[]=[]
  chek:boolean = false;
  total:any = 0

  
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

  ngOnInit():void {
    this.Total()
  }

}
