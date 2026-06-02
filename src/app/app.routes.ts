import { Routes ,RouterModule, RouterOutlet} from '@angular/router';
import { NgModule ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SokComponent } from '../sok/sok.component';
import { ShopComponent } from '../shop/shop.component';
import { CategorieComponent } from '../categorie/categorie.component';
import { SellerComponent } from '../seller/seller.component';
import { LikeComponent } from '../like/like.component';
import { CartComponent } from '../cart/cart.component';

export const routes: Routes = [
    { path: "", component: ShopComponent },
    { path:'product/:id',component:SokComponent},
    { path: "Categorie/:Categorie", component: CategorieComponent },
    { path: "seller/:seller", component: SellerComponent },
    { path: "like", component: LikeComponent },
    { path: "cart", component: CartComponent },
    
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        RouterOutlet
        
    ],
    exports:[RouterModule]
})

export class AppRoutingModule { 

    
}
    
