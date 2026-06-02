import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {

  like:any[] = []
 
  

  getLikeProducts(){
    if("like" in localStorage){
      this.like = JSON.parse(localStorage.getItem("like")!)
    }
  }

  delet(data:any){
    this.like.splice(data , 1)
    localStorage.setItem("like", JSON.stringify(this.like))
  }
  
  /*tree(title:any){
    let limit:any = 21
    let dots:any = "..."

    if(title.length > limit){
      title = title.substring(0,limit) + dots
    }
  }*/

  ngOnInit():void {
    this.getLikeProducts()
    
  }

}
