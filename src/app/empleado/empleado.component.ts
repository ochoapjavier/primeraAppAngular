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
  empresa="Sensu";

  constructor() { }

  /*getEdad(){
    return this.edad
  }*/

  ngOnInit(): void {
  }

}
