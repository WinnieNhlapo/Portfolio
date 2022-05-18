import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';


const routes: Routes = [
  {path:'nav',component:NavBarComponent},
  {path:'',component:ContentComponent},
  {path:'about',component:AboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
