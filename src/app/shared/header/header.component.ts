import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeSection: string = '';
  isMobileMenuOpen: boolean = false;

  scrollToSection(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -220;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}