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
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuarioRegistrado=false
  }


  llamaEmpresa(value:String){
    
  }

  setUsuarioRegistrado(event: Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro="El usuario se acaba de registrar";
    if ((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro="El usuario se acaba de registrar";
    } else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  constructor() { }

  /*getEdad(){
    return this.edad
  }*/

  ngOnInit(): void {
  }

}
