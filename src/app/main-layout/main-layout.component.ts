import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importiere CommonModule
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; // Importiere RouterOutlet
import { HeaderComponent } from '../shared/header/header.component'; // Importiere Header
import { FooterComponent } from '../shared/footer/footer.component'; // Importiere Footer
import { filter } from 'rxjs/operators';
import { AboutMeComponent } from '../about-me/about-me.component'; // Importiere AboutMeComponent
import { MySkillsComponent } from '../my-skills/my-skills.component'; // Importiere MySkillsComponent
import { PortfolioComponent } from '../portfolio/portfolio.component'; // Importiere PortfolioComponent
import { TeamFeedbackComponent } from '../team-feedback/team-feedback.component'; // Importiere TeamFeedbackComponent
import { ContactComponent } from '../contact/contact.component'; // Importiere ContactComponent

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent, // Füge AboutMeComponent hinzu
    MySkillsComponent, // Füge MySkillsComponent hinzu
    PortfolioComponent, // Füge PortfolioComponent hinzu
    TeamFeedbackComponent, // Füge TeamFeedbackComponent hinzu
    ContactComponent // Füge ContactComponent hinzu
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'] // Achte darauf, dass dies korrekt geschrieben ist
})
export class MainLayoutComponent implements OnInit  {
  showHeaderFooter: boolean = true; // Variable zur Steuerung der Anzeige von Header und Footer
  showBodyContent: boolean = true; // Steuerung für den gesamten Inhalt

  constructor(private router: Router) {}

  ngOnInit() {
    // Überwache die Navigation und setze die Variable entsprechend
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Setze showHeaderFooter auf false für die Routen 'imprint' und 'datenschutz'
      this.showHeaderFooter = !event.url.includes('imprint') && !event.url.includes('datenschutz');
      this.showBodyContent = event.url.includes('imprint') || event.url.includes('datenschutz') ? false : true;
      
    });
  }
}
