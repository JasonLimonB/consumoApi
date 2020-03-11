import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ejemploSweet(){
    Swal.fire({
      icon: "success",
      title: "Ejemplo sweet",
      text: "solo es un repaso del uso de sweet alert 2 en angular"
    })
  }

}
