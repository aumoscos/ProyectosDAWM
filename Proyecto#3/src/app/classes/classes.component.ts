import { Component } from '@angular/core';
import { FuenteClassesService } from '../fuente-classes.service';
import { Class } from '../class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  title='proyecto'
  classList:Class[] =[];
  constructor(private fuenteClases: FuenteClassesService) {
    	
    fuenteClases.obtenerDatos().subscribe(respuesta => {
      this.classList = respuesta as Array<Class>
    })
    
  }
}
