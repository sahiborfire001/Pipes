import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  description = 'Aplicacion de prueba sobre los "pipes"'
  nombreMaestro = 'melchor carranza'
  comidas = ['Mole', 'Enchiladas', 'Huevis fritos', 'Coctel de fruta', 'Arroz', 'Pizza', 'Tacos', 'Torta']
  PI = Math.PI
  porcentaje = 0.6048
  persona = [
    {
      nombre: 'Saul',
      edad: 22
    },
    {
      nombre: 'Lizeth',
      edad: 21
    },
    {
      nombre: 'Gabriel',
      edad: 24
    }
  ]
  fecha = Date.now()
  dinero = 100.568
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
