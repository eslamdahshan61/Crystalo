import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OurProductsComponent } from './our-products/our-products.component';


import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "singleproducts", component: ShopComponent },
            { path: "ourproducts", component: OurProductsComponent },
            { path: "checkout", component: CheckOutComponent },
            { path: "myaccount", component: MyAccountComponent },
            { path: "shoppingcard", component: ShoppingCardComponent },
        ])
    ],
    declarations: [
        OurProductsComponent,
        CheckOutComponent,
        MyAccountComponent,
        ShoppingCardComponent,
        ShopComponent,
        FooterComponent]

})




export class ShopModule {}