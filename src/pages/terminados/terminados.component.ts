import { Component, OnInit } from '@angular/core';

import { ListaDeseosService } from '../../app/services/listadeseos.service';

import { NavController } from 'ionic-angular';

import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public _listaDeseos: ListaDeseosService
  ) { }

  ngOnInit() { }

  verDetalle( lista, idx ) {
    this.navCtrl.push( DetalleComponent, { lista, idx } );
  }

}
