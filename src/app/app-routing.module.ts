import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {path:'nav',component:NavBarComponent},
  {path:'home',component:ContentComponent},
  {path:'about',component:AboutmeComponent},
  {path :'skills',component :SkillsComponent},
  {path: 'contact',component:ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
