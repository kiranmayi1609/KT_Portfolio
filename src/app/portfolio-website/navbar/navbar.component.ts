import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutComponent } from "../about/about.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SkillsComponent, ProjectsComponent, ContactComponent, AboutComponent, HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
