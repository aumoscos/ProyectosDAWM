import { Component } from '@angular/core';
import { FuenteSpellsService } from '../fuente-spells.service';
import { Spell } from '../spell';
@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent {
  title='proyecto'
  spellList:Spell[] =[];
  constructor(private fuenteSpells: FuenteSpellsService) {
    	
    fuenteSpells.obtenerDatos().subscribe(respuesta => {
      this.spellList = respuesta as Array<Spell>
    })
    
  }
}
