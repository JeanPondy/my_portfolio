import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule  ], // HttpClientModule hier importieren
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Korrigiere "styleUrl" zu "styleUrls"
})
export class ContactComponent {

  goToDatenschutzerklaerung() {
    window.open('https://jean-pondy.com/privacypolicy/', '_blank'); // '_blank' korrekt schreiben
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false, // Verwende boolean für die Datenschutzerklärung
  };

  mailTest = true;
  feedbackMessage: string | null = null; // Für das Feedback-Overlay

  post = {
    endPoint: 'https://jean-pondy.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    // Überprüfen, ob die Datenschutzerklärung akzeptiert wurde
    if (!this.contactData.privacyPolicy) {
      this.feedbackMessage = "Please accept the privacy policy.";
      return;
    }

    // Formular gesendet und validiert
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.feedbackMessage = "Your message has been sent successfully!";
            ngForm.resetForm();
          },
          error: (error) => {
            this.feedbackMessage = "An error occurred while sending the message.";
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.feedbackMessage = "Your message has been sent successfully (test mode).";
      ngForm.resetForm();
    }
  }

  // Methode zum Schließen des Overlays
  closeFeedback() {
    this.feedbackMessage = null; // Setze das Feedback zurück, um das Overlay zu schließen
  }

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
}
