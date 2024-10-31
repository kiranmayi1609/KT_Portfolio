import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }
