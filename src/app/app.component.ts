import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./portfolio-website/navbar/navbar.component";
import { FooterComponent } from "./portfolio-website/footer/footer.component";
import { HomeComponent } from "./portfolio-website/home/home.component";
import { AboutComponent } from "./portfolio-website/about/about.component";
import { SkillsComponent } from "./portfolio-website/skills/skills.component";
import { ProjectsComponent } from "./portfolio-website/projects/projects.component";
import { ContactComponent } from "./portfolio-website/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kt_PortfolioHub';
}
