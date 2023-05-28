import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-add/product-detail/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-add/product-edit/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add/product-add.component';

const routes: Routes = [{
  
  path: '', component: AdminLayoutsComponent, children: [
    { path: "product", component: ProductListComponent },
    { path: "product/detail/:id", component: ProductDetailComponent },
    { path: "product/:id/edit", component: ProductEditComponent },
    { path: "product/add", component: ProductAddComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
