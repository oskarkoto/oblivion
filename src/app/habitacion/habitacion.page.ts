import { Component, OnInit } from '@angular/core';
import { Habitacion, Reservacion } from './habitacion.model';
import { HabitacionService } from './habitacion.service';


@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.page.html',
  styleUrls: ['./habitacion.page.scss'],
})
export class HabitacionPage implements OnInit {
  habitaciones: Habitacion[];
  reservaciones: Reservacion[];

  constructor(private habitacionServicio: HabitacionService) { }

  ngOnInit() {
    this.habitaciones = this.habitacionServicio.getAllHabs();
    this.reservaciones = this.habitacionServicio.getAllRes();
  }

  ionViewWillEnter(){
    this.habitaciones = this.habitacionServicio.getAllHabs();
    this.reservaciones = this.habitacionServicio.getAllRes();
  }

}
