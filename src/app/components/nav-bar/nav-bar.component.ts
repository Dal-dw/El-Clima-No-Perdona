import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  menuOpen = false;

  constructor(private renderer: Renderer2) {}

  openMenu() {
    this.menuOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden'); // Agrega la clase para ocultar el scroll del body
  }

  closeMenu() {
    this.menuOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden'); // Elimina la clase para mostrar el scroll del body
  }

  ngOnInit() {}
}
