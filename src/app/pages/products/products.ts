import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /* info publica/privada */
  public infoTarjeta: Tarjeta[]
  constructor() {
    this.infoTarjeta = [
      {
        id: "t1",
        img: "../../../assets/radiografia.jpg",
        alt: "laboratorio",
        titulo: "veterinaria",
        descripcion: "perro con una camisa muy bonita",
        anualPublicacion: 2025
      },
      {
        id: "t2",
        img: "../../../assets/radiografia.jpg",
        alt: "laboratorio",
        titulo: "veterinaria",
        descripcion: "perro con una camisa muy bonita",
        anualPublicacion: 2025
      },
      {
        id: "t3",
        img: "../../../assets/radiografia.jpg",
        alt: "laboratorio",
        titulo: "veterinaria",
        descripcion: "perro con una camisa muy bonita",
        anualPublicacion: 2025
      },
      {
        id: "t4",
        img: "../../../assets/radiografia.jpg",
        alt: "laboratorio",
        titulo: "veterinaria",
        descripcion: "perro con una camisa muy bonita",
        anualPublicacion: 2025
      }
    ]
  }

  /*variable para almacenar tarjeta seleccionada */
  tarjetaSeleccionada: any = null;

  /*recibir el elemento seleccionado por parametro y le asicnamos a "tarjetaSelecionada" */
  vermasinfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}
