import { NgModule ,Input } from '@angular/core';
import { RouterModule, Routes,RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { SokComponent } from '../sok/sok.component';
import { ShopComponent } from '../shop/shop.component';
import { HttpClient } from '@angular/common/http';
import { CategorieComponent } from '../categorie/categorie.component';


const routes: Routes = [
  { path: 'sho', component: SokComponent },
  { path: '', component: ShopComponent },
  { path: '', component: CategorieComponent },
  
];

@NgModule({
        
        imports: [RouterModule.forRoot(routes),
        RouterOutlet,
        MatIconModule,
        
        ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  @Input() products: any[] = [];
  pro=0;
}