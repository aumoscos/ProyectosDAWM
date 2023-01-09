import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuenteMonstersService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
