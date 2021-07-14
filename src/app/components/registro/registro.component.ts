import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre = "john";
  apellido = "";

  constructor(private Peticion:PeticionService) { }

  ngOnInit(): void {
  }



  registrar(){
    console.log('estamos registrando')

      this.Peticion.Post('http://127.0.0.1:3000/insertardatos',{firstname:this.nombre,lastname:this.apellido}).then(
        (res) => {
          console.log(res)
        }
      )

  }


}
