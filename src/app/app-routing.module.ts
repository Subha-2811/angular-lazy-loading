import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'product', loadChildren: () =>  import('./product/product.module').then(m => m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
