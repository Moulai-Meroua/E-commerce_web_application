import { Component , ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ProductService } from '../app/product.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink,MatIconModule,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  Categories:any[] = [];

  constructor(private el: ElementRef ,private service:ProductService) { }
 
  ba3(){
   var elm= this.el.nativeElement.children[0].children[2];
   var item = elm.getElementsByClassName("rab");
   elm.append(item[0]);
 }

 cab(){
   var elm= this.el.nativeElement.children[0].children[2];
   var item = elm.getElementsByClassName("rab");
   elm.prepend(item[item.length - 1]);
 }

 /*GetCategories() {
  this.service.getCategories().subscribe((res:any) => {
    this.Categories = res
    console.warn(res)
  })
 }*/

  PutGetProduct() {
    this.service.categories().subscribe((res:any) => {
    this.Categories = res
    })
   }

 ngOnInit():void {
  /*this.GetCategories()*/
    this.PutGetProduct()
 }

}
