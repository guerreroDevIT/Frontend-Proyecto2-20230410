import { Component, OnInit } from '@angular/core';
import { MipaginaService } from 'src/app/servicios/mipagina.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPag : any;
  constructor(private datosMipagina: MipaginaService) {}

  ngOnInit(): void {
    this.datosMipagina.obtenerDatos().subscribe(data => {
      this.miPag = data;
    });
  }
}
