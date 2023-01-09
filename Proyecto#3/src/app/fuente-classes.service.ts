import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuenteClassesService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
