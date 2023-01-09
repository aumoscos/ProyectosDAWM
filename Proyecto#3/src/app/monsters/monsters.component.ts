import { Component } from '@angular/core';
import { Monster } from '../monster';
import { FuenteMonstersService } from '../fuente-monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent {
  title='proyecto'
  monList:Monster[] =[];
  constructor(private fuenteSpells: FuenteMonstersService) {
    	
    fuenteSpells.obtenerDatos().subscribe(respuesta => {
      this.monList = respuesta as Array<Monster>
    })
    
  }
}
