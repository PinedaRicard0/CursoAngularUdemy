import { Component } from '@angular/core';


@Component({
	selector:'app-servidor',
	templateUrl: './servidor.component.html',
	styles: [`
	.enLinea{
		color: white
	}
	`]
})
export class ServidorComponent{
	idServidor = 15;
	estadoServidor = '';

	constructor(){
		this.estadoServidor = Math.random() > 0.5 ? 'en línea' : "desconectado";
	}

	getEstadoServidor(){
		return this.estadoServidor;
	}

	getColor(){
		return this.estadoServidor === 'desconectado' ? 'red' : 'green';
	}
}