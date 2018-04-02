import { Component } from '@angular/core';


@Component({
	selector:'app-servidor',
	templateUrl: './servidor.component.html'
})
export class ServidorComponent{
	idServidor = 15;
	estadoServidor = 'desconectado';

	getEstadoServidor(){
		return this.estadoServidor;
	}
}