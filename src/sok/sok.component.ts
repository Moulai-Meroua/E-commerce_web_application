import { Component,Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../app/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sok',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sok.component.html',
  styleUrl: './sok.component.css'
})
export class SokComponent implements OnInit {
  @Output () iteme = new EventEmitter();


  products:any = {}
  cart:any[] = []
  like:any[] = []
  data:any = {} 
  addBool:boolean = false;
  beg:number = 1
  chek:boolean = false
  id:any

 constructor(private route:ActivatedRoute , private service:ProductService) {
  this.id = this.route.snapshot.paramMap.get("id")
  console.log(this.id)
  }

ngOnInit(): void {
  this.getProduct()
  
 /* let id = this.activeRoute.snapshot.paramMap.get("id")
  console.warn (id)
  this.service.getProductById(id).subscribe((res)=>{
    console.log(res)
   this.products = res  
  })*/
}

getProduct() {
  this.service.getProductById(this.id).subscribe(res => {
    this.data = res
    console.log(this.data)
    this.exist(this.data)
  }) 
}

Like(){
    if("like" in localStorage){
      this.like = JSON.parse(localStorage.getItem("like")!)
    if(this.chek == true){
      let exam = this.like.find(item => item.id == this.data.id)
    if(!exam){
    this.like.push(this.data)
    localStorage.setItem("like" , JSON.stringify(this.like) )
  }
  }else{
  let no = this.like.find(dodo => dodo.id == this.data.id)
  if(no){
    let index = this.like.findIndex(x => x.id === this.data.id);
    this.like.splice(index,1)
    localStorage.setItem("like" , JSON.stringify(this.like) )
  }
}
localStorage.setItem("like" , JSON.stringify(this.like) )
}else{
  if(this.chek == true){
    let exam = this.like.find(item => item.id == this.data.id)
    if(!exam){
    this.like.push(this.data)
    localStorage.setItem("like" , JSON.stringify(this.like) )
  }
  }else{
  let no = this.like.find(dodo => dodo.id == this.data.id)
  if(no){
    let index = this.like.findIndex(x => x.id === this.data.id);
    this.like.splice(index,1)
    localStorage.setItem("like" , JSON.stringify(this.like) )  
  }
}
localStorage.setItem("like" , JSON.stringify(this.like) )
}
}

exist(mimi:any){
  if("like" in localStorage){
    this.like = JSON.parse(localStorage.getItem("like")!)
    let yes = this.like.find(item => item.id == mimi.id)
  if(yes){
    this.chek = true
  }else{
    this.chek = false
  }
} 
}


two(){
  let x = { product : this.data , quantity : this.beg }
  if(x.quantity > this.data.pieces){
    x.quantity = this.data.pieces
  }
  if(x.quantity <= 0 ){
    x.quantity = 1
  }
  this.addtocart(x)
}


addtocart(lili:any){
  if("cart" in localStorage){
    this.cart = JSON.parse(localStorage.getItem("cart")!)
    let ex = this.cart.find(item => item.product.id == lili.product.id)
    if(ex){
      alert("this product is already in the cart ✨")
    }else{
    this.cart.push(lili)
    localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }else{
    this.cart.push(lili)
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}

}

