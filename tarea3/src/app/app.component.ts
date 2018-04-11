import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	mostrarTexto = true;
	clicks = [];
	contador = 0;

	onMostrarDetalles()
	{
		this.contador++;
		this.mostrarTexto = !this.mostrarTexto;
		this.clicks.push(this.contador);
	}
}
