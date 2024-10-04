import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-footer',
  standalone: true,
  imports: [],
  templateUrl: './big-footer.component.html',
  styleUrl: './big-footer.component.css',
})
export class BigFooterComponent implements OnInit{
  ngOnInit(): void {
    const acordeon = document.querySelectorAll('.acordeon');

    acordeon.forEach((acordeon) => {
      acordeon.addEventListener('click', () => {
        const body = acordeon.querySelector('.acordeon-body');
        body?.classList.toggle('active');
      });
    });
  }
}
