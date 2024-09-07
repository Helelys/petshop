import { Component } from '@angular/core';
import { ContactHeaderComponent } from "../../components/contact-header/contact-header.component";
import { HeaderBarComponent } from "../../components/header-bar/header-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactHeaderComponent, HeaderBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
