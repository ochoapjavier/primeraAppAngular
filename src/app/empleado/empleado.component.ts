import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Javier";
  apellido="Ochoa";
  edad=19;
  //empresa="Sensu";
  habilitacionCuadro=true;
  usuarioRegistrado=false;

  getRegistroUsuario(){
    this.usuarioRegistrado=false
  }


  llamaEmpresa(value:String){
    
  }

  constructor() { }

  /*getEdad(){
    return this.edad
  }*/

  ngOnInit(): void {
  }

}
