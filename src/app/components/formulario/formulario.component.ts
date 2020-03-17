import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forma: FormGroup;

  get nombreValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  constructor( private formB: FormBuilder ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.formB.group({
      nombre: ['', [Validators.required, Validators.minLength(5)] ],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
  }

  guardar(){

    if( this.forma.invalid ){
      return Object.values(this.forma.controls).forEach( control =>{
        control.markAsTouched();
      });
    }

    console.log(this.forma);
  }

}
