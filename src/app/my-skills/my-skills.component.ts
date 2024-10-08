import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;  // Setze den aktiven Abschnitt
    
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -220; // 80px Abstand vom oberen Rand
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

}
