import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeItem = ''; // Página actual
  hoverItem: string | null = null; // Categoría sobre la que se hace hover

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.setActiveByRoute(this.router.url);
    });
  }

  setHoverItem(key: string) {
    this.hoverItem = key;
  }

  clearHoverItem() {
    this.hoverItem = null;
  }

/*Mostrar linea amarilla de la ruta seleccionada */
  setActiveByRoute(url: string) {
    if (url === '/') this.activeItem = 'home';
    else if (url.startsWith('/quienes-somos') || url.startsWith('/valores-corpo') || url.startsWith('/politicas')) {
      this.activeItem = 'corporativa';
    } else if (url.startsWith('/xtrim-cuenta') || url.startsWith('/noticias')) {
      this.activeItem = 'eventos';
    } else if (url.startsWith('/salud') || url.startsWith('/beneficios-corpo')) {
      this.activeItem = 'colaboradores';
    } else if (url.startsWith('/manual-marca')) {
      this.activeItem = 'marca';
    } else {
      this.activeItem = '';
    }
  }

/*Para pantallas pequeñas */
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  /*Hacer sticky el segundo navbar*/
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 80;
  }
}
