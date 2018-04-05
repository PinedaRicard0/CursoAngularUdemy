import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {
  nombreServidor='Servidor de prueba';
	permitirNuevoServidor = false;
	estadoCreacionServidor = 'No ha sido creado ningún servidor!';
  servidorCreado = false;

  constructor() { 
  	setTimeout(() => {
  		this.permitirNuevoServidor = true;
  	} ,2000)
  }

  ngOnInit() {
  }

  onCrearServidor(){
    this.servidorCreado = true;
  	this.estadoCreacionServidor = 'El servidor ha sido creado y se llama ' + this.nombreServidor;
  }

  onActualizarNombreEstado(evento:Event)
  {
    this.nombreServidor = (<HTMLInputElement>evento.target).value;
  }


}
