import { Component } from '@angular/core';

@Component({
  selector: 'app-el-pollo-loc',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loc.component.html',
  styleUrl: './el-pollo-loc.component.scss'
})
export class ElPolloLocComponent {


  goToElpolloloco(){
    window.open('https://jean-pondy.com/el-pollo-loco-jp/', '-blabk');
  }

  goToGithub(){
    window.open(' https://github.com/JeanPondy/elPolloLoco', '-blabk');
  }


}
