import { Component, OnInit } from '@angular/core';
import { ConsumoServiceService } from '../../services/consumo-service.service';

@Component({
  selector: 'app-ejem-consumo',
  templateUrl: './ejem-consumo.component.html',
  styleUrls: ['./ejem-consumo.component.css']
})
export class EjemConsumoComponent implements OnInit {

  constructor( private _miServicio: ConsumoServiceService ) { 
  }

  informacion: string[] = [];

  ngOnInit(): void {
    
    this._miServicio.getData().subscribe((data:any) => {
      this.informacion = data;
      console.log(data);
      
    });
    
  }

}
