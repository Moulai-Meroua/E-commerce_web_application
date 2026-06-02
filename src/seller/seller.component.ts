import { ProductService } from '../app/product.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Component ,OnInit} from '@angular/core';
import { ProComponent } from '../pro/pro.component';


@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [CommonModule,MatIconModule,ProComponent],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent implements OnInit{
  cart:any[] = []
  diva:any = []
  pronum:any = 21
  seller:any

  constructor( private service:ProductService,private route:ActivatedRoute ) { 
    this.seller = this.route.snapshot.paramMap.get("seller")
    console.log(this.seller)
    this.GetProducts(this.seller)
  }

  GetProducts(ed:any) {
    this.service.getProductsBySeller(ed).subscribe((res:any) => {
      this.diva = res.reverse()
      console.warn(res)
       
    })}

    showmore(){
      this.pronum = this.pronum + 21
    }
    

 ngOnInit():void {

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
