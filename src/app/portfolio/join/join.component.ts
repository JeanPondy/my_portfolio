import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

  goToJoin(){
    window.open('https://jean-pondy.com/join/login.html', '-blabk');
  }

  goToGithub(){
    window.open('https://github.com/lindapreindl/Join', '-blabk');
  }

 

}
