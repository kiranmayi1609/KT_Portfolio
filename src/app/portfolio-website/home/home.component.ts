import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from '../navbar/navbar.component';
import{MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
