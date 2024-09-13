import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-case',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './case.component.html',
  styleUrl: './case.component.css'
})
export class CaseComponent {

}
