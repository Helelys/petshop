import { Component } from '@angular/core';
import { ContactHeaderComponent } from "../../components/contact-header/contact-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
