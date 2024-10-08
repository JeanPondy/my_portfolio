import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { ElPolloLocComponent  } from './el-pollo-loc/el-pollo-loc.component'
import { SimpleCrmComponent } from './simple-crm/simple-crm.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { DaBubbleComponent } from "./da-bubble/da-bubble.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, ElPolloLocComponent, SimpleCrmComponent, PokedexComponent, DaBubbleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
