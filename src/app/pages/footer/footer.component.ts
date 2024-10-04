import { Component } from '@angular/core';
import { BigFooterComponent } from "../../components/big-footer/big-footer.component";
import { SmallFooterComponent } from "../../components/small-footer/small-footer.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BigFooterComponent, SmallFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
