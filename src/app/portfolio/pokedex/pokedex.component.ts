import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  goToElpolloloco(){
    window.open('https://jean-pondy.com/el-pollo-loco-jp/', '-blabk');
  }

  goToGithub(){
    window.open(' https://github.com/JeanPondy/elPolloLoco', '-blabk');
  }


}
