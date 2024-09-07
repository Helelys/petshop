import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent implements OnInit {
  ngOnInit(): void {
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.querySelector(".nav");

    hamburguer?.addEventListener("click", ()=> nav?.classList.toggle("ativo"));
  }
}
