import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { OrderComponent } from './order/order.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{
  path: "", component: HomePageComponent
}, {
  path: "menu", component: MenuListComponent
}, {
  path: "menu/:id", component: MenuDetailsComponent
}, {
  path: "order", component: OrderComponent
}, {
  path: "about", component: AboutPageComponent
}, {
  path: "**", redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
