import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
	habilitarBoton = false;
	suNombre = '';

  constructor() { }

  ngOnInit() {
  }

  onCambiaNombre()
  {
  	if(this.suNombre==='')
  		this.habilitarBoton = false; 		
  	else
  		this.habilitarBoton = true;
  }

  onLimpiar(){
  	this.suNombre = '';
  	this.habilitarBoton = false;
  }

}
