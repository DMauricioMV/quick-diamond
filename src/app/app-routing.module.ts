import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './GUI/home/home.component';
import { ContactComponent } from './GUI/contact/contact.component';
import { CreateProductComponent } from './product/component/create-product/create-product.component';
import { ListProductComponent } from './product/component/list-product/list-product.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'contact',component: ContactComponent},
  {path:'createProduct',component: CreateProductComponent },
  {path:'listProduct',component: ListProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
