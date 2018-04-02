import { Component } from '@angular/core';

@Component({
	selector: 'app-advertencia',
	template: `
	<div>
		<p>Advertencia, tenemos algunos problemas</p>
	</div>
	`,
	styles:[`
	div{
		border-style: solid;
		border-width: 4px;
		border-radius: 70px;
		border-color: red;
		background-color: firebrick;
		text-align: center;
		vertical-align: middle;
		line-height: 90px;
	}

	p {
	    font-size: 25px;
    	color: black;
	}
	`]
})

export class AdvertenciaComponent{

}