import { Component,Input } from '@angular/core';
import { AdsComponent } from '../ads/ads.component';
import { CategoriesComponent } from "../categories/categories.component";
import { SokComponent } from "../sok/sok.component";
import { ProductComponent } from "../product/product.component";


@Component({
  selector: 'app-shop',
  standalone: true, 
  imports: [AdsComponent, CategoriesComponent, SokComponent, ProductComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  moves: any[]=[

    {
      href:'https://www.youtube.com/',
      url:'https://news.radioalgerie.dz/sites/default/data/2023-11/11841.jpg',
      title:'First photo',
      description:'this is the First photo',
    },

    {
      href:'https://www.facebook.com/',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png',
      title:'Second photo',
      description:'this is the Second photo',
    },

    {
      href:'https://www.instagram.com/',
      url:'https://static.euronews.com/articles/347916/1200x675_347916.jpg',
      title:'Therd photo',
      description:'this is the Therd photo',
    },

    {
      href:'https://taming.io/',
      url:'https://www.elkhabar.com/media/uploads/images/2024-05-0314%3A00%3A39.793758-877-980x980.webp',
      title:'Fourth photo',
      description:'this is the Fourth photo',
    },

    {
      href:'https://www.google.com/',
      url:'https://m.media-amazon.com/images/I/61qjzKqvRTL.jpg',
      title:'Fifth photo',
      description:'this is the Fifth photo',
    },

    {
      href:'https://witanime.cyou/',
      url:'https://cdnuploads.aa.com.tr/uploads/Contents/2024/05/08/thumbs_b_c_fb54e5793665ae86a0facc267589c134.jpg?v=101241',
      title:'Sixth photo',
      description:'this is the Sixth photo',
    },
  ]

}
