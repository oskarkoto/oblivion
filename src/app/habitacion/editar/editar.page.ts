import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Habitacion } from '../habitacion.model';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  formEdit: FormGroup;
  habitacion: Habitacion;
  constructor(
    private activatedRoute: ActivatedRoute,
    private habitacionServicio: HabitacionService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('habitacionId')){
          // No existe el parametro redirecciono
          return;
        }
        const habitacionId = paramMap.get('habitacionId');
        this.habitacion = this.habitacionServicio.getHabitacion(habitacionId);
        console.log(this.habitacion);
      }
    );
    this.formEdit = new FormGroup({

      ubicacion: new FormControl(null, {
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      estado: new FormControl(null, {
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      categoria: new FormControl(null, {
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      descripcion: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      img1: new FormControl(null, {
        validators: [Validators.required]
      }),
      img2: new FormControl(null, {
        validators: [Validators.required]
      }),
      img3: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  editFunction(){
    if(!this.formEdit.valid){
      return;
    }
    console.log(this.formEdit);
    this.habitacionServicio.editHabitacion(
      this.formEdit.value.ubicacion,
      this.formEdit.value.ubicacion,
      this.formEdit.value.estado,
      this.formEdit.value.categoria,
      this.formEdit.value.descripcion,
      this.formEdit.value.img1,
      this.formEdit.value.img2,
      this.formEdit.value.img3
    );
    this.router.navigate(['/habitacion']);
  }

}
