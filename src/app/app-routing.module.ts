import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop"},
  { path: '', redirectTo:'/home' , pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
