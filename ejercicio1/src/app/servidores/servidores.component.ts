import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent implements OnInit {

	permitirNuevoServidor = false;
	estadoCreacionServidor = 'No ha sido creado ningún servidor!';

  constructor() { 
  	setTimeout(() => {
  		this.permitirNuevoServidor = true;
  	} ,2000)
  }

  ngOnInit() {
  }

  onCrearServidor(){
  	this.estadoCreacionServidor = 'El servidor ha sido creado';
  }

}
