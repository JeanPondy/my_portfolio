import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'], // Korrektur hier
  encapsulation: ViewEncapsulation.Emulated // Stile werden auf diese Komponente angewendet
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    // Hier kannst du Logik für die Initialisierung hinzufügen, falls nötig
  }
  goToImprint(){
    window.open('https://jean-pondy.com/imprint/', '-blabk');
  }

  goToLinkedin(){
    window.open('https://www.linkedin.com/in/jean-pondy-9244b0160/', '-blabk');
  }

  goToGithub(){
    window.open('https://github.com/JeanPondy/portfolio', '-blabk');
  }
  /* ---------------------------------------------------------- */
  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;  // Setze den aktiven Abschnitt
    
    const element = document.getElementById(section);
    if (element) {
      const yOffset = 0; // 80px Abstand vom oberen Rand
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

  goToHome() {
    this.router.navigate(['/']); // Navigiert zur Startseite
  }
}
