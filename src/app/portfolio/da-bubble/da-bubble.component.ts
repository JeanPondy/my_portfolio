import { Component } from '@angular/core';

@Component({
  selector: 'app-da-bubble',
  standalone: true,
  imports: [],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss'
})
export class DaBubbleComponent {
  goToElpolloloco(){
    window.open('https://jean-pondy.com/el-pollo-loco-jp/', '-blabk');
  }

  goToGithub(){
    window.open(' https://github.com/JeanPondy/elPolloLoco', '-blabk');
  }


}
