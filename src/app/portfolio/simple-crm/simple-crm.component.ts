import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-crm',
  standalone: true,
  imports: [],
  templateUrl: './simple-crm.component.html',
  styleUrl: './simple-crm.component.scss'
})
export class SimpleCrmComponent {

  goToElpolloloco(){
    window.open('https://jean-pondy.com/el-pollo-loco-jp/', '-blabk');
  }

  goToGithub(){
    window.open(' https://github.com/JeanPondy/elPolloLoco', '-blabk');
  }


}
