import { ChangeDetectorRef, Component ,EventEmitter,Inject,Injectable,Input , OnInit, Output,HostListener} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pro',
  standalone: true,
  imports: [MatIconModule , CommonModule,FormsModule],
  templateUrl: './pro.component.html',
  styleUrl: './pro.component.css'
})
export class ProComponent implements OnInit{
 @Input () pro:any = {};
 @Output () iteme = new EventEmitter();
 index:any
 addBool:boolean = false;
 beg:number = 1;
 chek:boolean = false
 like:any[] = []
 cart:any[]=[]
 

   tooltipVisible = false;
   tooltipText = '';
   tooltipPosition = { top: '0px', left: '0px' };
 
   showTooltip(event: MouseEvent, text: string) {
     this.tooltipVisible = true;
     this.tooltipText = text;
     this.updateTooltipPosition(event);
   }
 
   hideTooltip() {
     this.tooltipVisible = false;
   }
 
   updateTooltipPosition(event: MouseEvent) {
     this.tooltipPosition = {
       top: event.clientY + 95 + "px",
       left: event.clientX + 185 + "px"
     };
   }

   
 

 constructor(){

 }

 ngOnInit(): void {  
  this.exist()
 }

 Like(){
  if("like" in localStorage){
      this.like = JSON.parse(localStorage.getItem("like")!)   
    if(this.chek == true){
    let exam = this.like.find(item => item.id == this.pro.id)
    if(!exam){
    this.like.push(this.pro)
     localStorage.setItem("like" , JSON.stringify(this.like) )
     localStorage.setItem("cart", JSON.stringify(this.cart))
    }
  }else{
  let no = this.like.find(dodo => dodo.id == this.pro.id)
  if(no){
    this.index = this.like.findIndex(x => x.id === this.pro.id);
    this.like.splice(this.index ,1)
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}
localStorage.setItem("like" , JSON.stringify(this.like) )
localStorage.setItem("cart", JSON.stringify(this.cart))
}else{
  if(this.chek == true){
    let exam = this.like.find(item => item.id == this.pro.id)
    if(!exam){
    this.like.push(this.pro)
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
   }
  }else{
  let no = this.like.find(dodo => dodo.id == this.pro.id)
  if(no){
    this.index = this.like.findIndex(x => x.id === this.pro.id);
    this.like.splice(this.index,1)   
    localStorage.setItem("like" , JSON.stringify(this.like) )
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}
localStorage.setItem("like" , JSON.stringify(this.like) )
localStorage.setItem("cart", JSON.stringify(this.cart))
}
  
 }

 exist(){
  if("like" in localStorage){
    this.like = JSON.parse(localStorage.getItem("like")!)
    let yes = this.like.find(item => item.id == this.pro.id)
  if(yes){
    this.chek = true
  }else{
    this.chek = false
  }
} 
}

 

 Add(){
        this.iteme.emit({ product : this.pro , quantity : this.beg , checked : this.chek })
}

}
